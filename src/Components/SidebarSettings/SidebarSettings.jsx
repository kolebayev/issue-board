import React, { useState } from 'react'
import './SidebarSettings.scss'
import { Sidebar } from '@consta/uikit/Sidebar'
import { Text } from '@consta/uikit/Text'
import { Informer } from '@consta/uikit/Informer'
import { Button } from '@consta/uikit/Button'
import { IconClose } from '@consta/uikit/IconClose'
import { SnackBar } from '@consta/uikit/SnackBar'
import InputWithLabel from '../InputWithLabel/InputWithLabel'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { request } from '@octokit/request'
import useLocalStorageState from '../../utils/useLocalStorageState'

function SidebarSettings() {
  const setSidebarSettingsIsOpen = useStoreActions(
    (actions) => actions.setSidebarSettingsIsOpen
  )
  const sidebarSettingsIsOpen = useStoreState(
    (state) => state.sidebarSettingsIsOpen
  )
  const closeSidebar = () => setSidebarSettingsIsOpen(!sidebarSettingsIsOpen)

  const repoOwner = useStoreState((state) => state.repoOwner)
  const setRepoOwner = useStoreActions((actions) => actions.setRepoOwner)

  const repoName = useStoreState((state) => state.repoName)
  const setRepoName = useStoreActions((actions) => actions.setRepoName)

  const githubToken = useStoreState((state) => state.githubToken)
  const setGithubToken = useStoreActions((actions) => actions.setGithubToken)

  const setIssuesList = useStoreActions((actions) => actions.setIssuesList)

  const setRepoLabelsList = useStoreActions(
    (actions) => actions.setRepoLabelsList
  )

  const [fetchErrorResponse, setFetchErrorResponse] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const [localToken, setLocalToken] = useLocalStorageState('issBrdGhTkn', null)

  React.useEffect(() => {
    localToken !== 'null' && setGithubToken(localToken)
  }, [localToken, setGithubToken])

  const fetchIssues = async (githubToken, repoOwner, repoName) => {
    let resultFromAllPages = []
    for (let i = 0; i < 10; i++) {
      let result = await request('GET /repos/{owner}/{repo}/issues', {
        headers: {
          authorization: githubToken,
        },
        owner: repoOwner,
        repo: repoName,
        per_page: 100,
        page: i,
      })
      if (result.data.length === 0) {
        break
      } else {
        resultFromAllPages.push(...result.data)
      }
    }
    return resultFromAllPages
  }

  const fetchLabels = async (githubToken, repoOwner, repoName) => {
    let result = await request('GET /repos/{owner}/{repo}/labels', {
      headers: {
        authorization: githubToken,
      },
      owner: repoOwner,
      repo: repoName,
    })
    return result.data
  }

  const inputGroup = [
    {
      labelLeft: 'Владелец репозитория',
      labelRight: null,
      placeholder: 'Пользователь GitHub или организация',
    },
    {
      labelLeft: 'Название репозитория',
      labelRight: null,
      placeholder: 'Название',
    },
    {
      labelLeft: 'Токен GitHub',
      labelRight: 'Как получить',
      placeholder: 'Длинный набор букв и цифр',
    },
  ]

  return (
    <Sidebar
      isOpen={sidebarSettingsIsOpen}
      hasOverlay
      position="right"
      className="SidebarSettings"
      onClickOutside={closeSidebar}
    >
      <div className="SidebarSettings_content">
        <div>
          <div className="SidebarSettings_mainHeading">
            <Text view="primary" weight="bold" size="3xl">
              IssueBoard
            </Text>
            <Button
              view="clear"
              iconLeft={IconClose}
              onlyIcon
              size="s"
              onClick={closeSidebar}
            />
          </div>
          <Text
            view="secondary"
            size="l"
            className="SidebarSettings_introParagraph"
          >
            IssueBoard — приложение для просмотра ишью в открытых репозиториях
            GitHub. По умолчанию подключен репозиторий дизайн-системы
            <Text
              view="link"
              size="l"
              as="a"
              target="_blank"
              href="http://consta.gazprom-neft.ru"
            >
              {' '}
              Consta
            </Text>
            .
          </Text>
          <Informer
            label="Для работы IssueBoard вам понадобится токен GitHub"
            view="filled"
            status="system"
            className="SidebarSettings_informer"
          />
          <InputWithLabel
            labelLeft={inputGroup[0].labelLeft}
            labelRight={inputGroup[0].labelRight}
            placeholder={inputGroup[0].placeholder}
            width="full"
            defaultValue={repoOwner}
            onInputChange={setRepoOwner}
          />
          <InputWithLabel
            labelLeft={inputGroup[1].labelLeft}
            labelRight={inputGroup[1].labelRight}
            placeholder={inputGroup[1].placeholder}
            width="full"
            defaultValue={repoName}
            onInputChange={setRepoName}
          />
          <InputWithLabel
            labelLeft={inputGroup[2].labelLeft}
            labelRight={inputGroup[2].labelRight}
            placeholder={inputGroup[2].placeholder}
            width="full"
            defaultValue={githubToken}
            onInputChange={setGithubToken}
          />
        </div>
        {fetchErrorResponse.length ? (
          <SnackBar
            onClose={() => setFetchErrorResponse([])}
            items={fetchErrorResponse}
            className="SidebarSettings_snackBar"
          />
        ) : (
          <Button
            view="primary"
            size="l"
            width="full"
            label="Загрузить issues"
            className="SidebarSettings_ctaButton"
            loading={isLoading}
            onClick={() => {
              setIsLoading(true)
              if (githubToken && repoOwner && repoName) {
                ;(async () => {
                  await fetchIssues(githubToken, repoOwner, repoName).then(
                    (data) => {
                      setIssuesList(data)
                    }
                  )
                  await fetchLabels(githubToken, repoOwner, repoName).then(
                    (data) => {
                      setRepoLabelsList(data)
                    }
                  )
                })()
                  .then(async () => {
                    setLocalToken(githubToken)
                    await setIsLoading(false)
                    await setSidebarSettingsIsOpen(false)
                  })
                  .catch((err) => {
                    setFetchErrorResponse([
                      {
                        key: 1,
                        message: `${err.name} ${err.status}`,
                        status: 'alert',
                        autoClose: 3,
                        onAutoClose: () => {
                          setFetchErrorResponse([])
                        },
                      },
                    ])
                    setIsLoading(false)
                  })
              } else {
                setFetchErrorResponse([
                  {
                    key: 1,
                    message: 'Не указан один из параметров запроса',
                    status: 'alert',
                    autoClose: 3,
                    onAutoClose: () => {
                      setFetchErrorResponse([])
                    },
                  },
                ])
                setIsLoading(false)
              }
            }}
          />
        )}
      </div>
    </Sidebar>
  )
}

export default SidebarSettings

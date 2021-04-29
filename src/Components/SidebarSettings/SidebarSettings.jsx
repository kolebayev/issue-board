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

  const setIssuesList = useStoreActions((actions) => actions.setIssuesList)

  const setRepoLabelsList = useStoreActions(
    (actions) => actions.setRepoLabelsList
  )

  const [fetchErrorResponse, setFetchErrorResponse] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const fetchIssues = async (repoOwner, repoName) => {
    let resultFromAllPages = []
    for (let i = 0; i < 10; i++) {
      let result = await request('GET /repos/{owner}/{repo}/issues', {
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

  const fetchLabels = async (repoOwner, repoName) => {
    let result = await request('GET /repos/{owner}/{repo}/labels', {
      owner: repoOwner,
      repo: repoName,
    })
    return result.data
  }

  const inputGroup = [
    {
      labelLeft: 'Владелец репозитория',
      placeholder: 'Пользователь GitHub или организация',
    },
    {
      labelLeft: 'Название репозитория',
      placeholder: 'Название',
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
          <InputWithLabel
            labelLeft={inputGroup[0].labelLeft}
            placeholder={inputGroup[0].placeholder}
            width="full"
            defaultValue={repoOwner}
            onInputChange={setRepoOwner}
          />
          <InputWithLabel
            labelLeft={inputGroup[1].labelLeft}
            placeholder={inputGroup[1].placeholder}
            width="full"
            defaultValue={repoName}
            onInputChange={setRepoName}
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
              if (repoOwner && repoName) {
                ;(async () => {
                  await fetchIssues(repoOwner, repoName).then((data) => {
                    setIssuesList(data)
                  })
                  await fetchLabels(repoOwner, repoName).then((data) => {
                    setRepoLabelsList(data)
                  })
                })()
                  .then(async () => {
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

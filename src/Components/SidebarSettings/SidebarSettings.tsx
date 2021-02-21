import React from 'react'
import './SidebarSettings.scss'
import { Sidebar } from '@consta/uikit/Sidebar'
import { Text } from '@consta/uikit/Text'
import { Informer } from '@consta/uikit/Informer'
import { Button } from '@consta/uikit/Button'
import { IconClose } from '@consta/uikit/IconClose'
import InputWithLabel from '../InputWithLabel/InputWithLabel'
import { useStoreActions, Actions, useStoreState, State } from 'easy-peasy'
import { ModelTypes } from '../../store/store'
import { request } from '@octokit/request'

type StoreActions = Actions<ModelTypes>
type StoreState = State<ModelTypes>

function SidebarSettings() {
  const setSidebarSettingsIsOpen = useStoreActions(
    (actions: StoreActions) => actions.setSidebarSettingsIsOpen
  )
  const sidebarSettingsIsOpen = useStoreState(
    (state: StoreState) => state.sidebarSettingsIsOpen
  )
  const closeSidebar = () => setSidebarSettingsIsOpen(!sidebarSettingsIsOpen)

  const repoOwner = useStoreState((state: StoreState) => state.repoOwner)
  const setRepoOwner = useStoreActions(
    (actions: StoreActions) => actions.setRepoOwner
  )

  const repoName = useStoreState((state: StoreState) => state.repoName)
  const setRepoName = useStoreActions(
    (actions: StoreActions) => actions.setRepoName
  )

  const githubToken = useStoreState((state: StoreState) => state.githubToken)
  const setGithubToken = useStoreActions(
    (actions: StoreActions) => actions.setGithubToken
  )

  const fetchIssues = async (
    githubToken: string,
    repoOwner: string,
    repoName: string
  ) => {
    return await request('GET /repos/{owner}/{repo}/issues', {
      headers: {
        authorization: githubToken as string,
      },
      owner: repoOwner as string,
      repo: repoName as string,
      per_page: 100,
    })
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
              IssueDeck
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
            IssueDeck — утилита для просмотра issues в открытых репозиториях
            GitHub. По умолчанию подключен репозиторий дизайн-системы
            <Text view="link" size="l" as="a" href="">
              {' '}
              Consta
            </Text>
            .
          </Text>
          <Informer
            label="Для работы IssueDeck вам понадобится токен GitHub"
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
        <Button
          view="primary"
          size="l"
          width="full"
          label="Загрузить issues"
          className="SidebarSettings_ctaButton"
          onClick={() => {
            if (githubToken && repoOwner && repoName) {
              fetchIssues(githubToken, repoOwner, repoName).then((data) =>
                console.log(data)
              )
            } else {
              alert('Не указан один из параметров запроса')
            }
          }}
        />
      </div>
    </Sidebar>
  )
}

export default SidebarSettings

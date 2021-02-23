import React from 'react'
import './Header.scss'
import { Text } from '@consta/uikit/Text'
import { Button } from '@consta/uikit/Button'
import { useStoreActions, Actions, useStoreState, State } from 'easy-peasy'
import { ModelTypes } from '../../store/store'
import logo from '../../images/logo.svg'

type StoreActions = Actions<ModelTypes>
type StoreState = State<ModelTypes>

function Header() {
  const setSidebarSettingsIsOpen = useStoreActions(
    (actions: StoreActions) => actions.setSidebarSettingsIsOpen
  )
  const sidebarSettingsIsOpen = useStoreState(
    (state: StoreState) => state.sidebarSettingsIsOpen
  )
  return (
    <div className="Header">
      <div className="Header_leftSide">
        <img src={logo} alt="Consta logo" className="Header_leftSide_logo" />
        <Text view="primary" size="m">
          IssueDeck
        </Text>
      </div>
      <Button
        view="ghost"
        label="Что это такое?"
        size="xs"
        onClick={() => setSidebarSettingsIsOpen(!sidebarSettingsIsOpen)}
      />
    </div>
  )
}

export default Header

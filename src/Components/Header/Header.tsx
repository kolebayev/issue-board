import React from 'react'
import './Header.scss'
import { Text } from '@consta/uikit/Text'
import { Button } from '@consta/uikit/Button'
import { useStoreActions, Actions, useStoreState, State } from 'easy-peasy'
import { ModelTypes } from '../../store/store'
import logo from '../../images/logo.svg'
import logo20 from '../../images/logo20.svg'
import logo30 from '../../images/logo30.svg'

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
        <img src={logo30} alt="Consta logo" className="Header_leftSide_logo" />
        <Text view="primary" size="m">
          IssueDeck
        </Text>
      </div>
      <Button
        view="ghost"
        label="А це шо?"
        size="xs"
        onClick={() => setSidebarSettingsIsOpen(!sidebarSettingsIsOpen)}
      />
    </div>
  )
}

export default Header

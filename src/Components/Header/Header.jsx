import React, { useState } from 'react'
import './Header.scss'
import { Text } from '@consta/uikit/Text'
import { Button } from '@consta/uikit/Button'
import { Switch } from '@consta/uikit/Switch'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { useStoreActions, useStoreState } from 'easy-peasy'
import logo from '../../images/logo.svg'

function Header() {
  const setSidebarSettingsIsOpen = useStoreActions(
    (actions) => actions.setSidebarSettingsIsOpen
  )
  const sidebarSettingsIsOpen = useStoreState(
    (state) => state.sidebarSettingsIsOpen
  )
  const setColsQty = useStoreActions((actions) => actions.setColsQty)
  const issuesQty = useStoreState((state) => state.issuesList)
  const items = ['2', '3', '4']
  const [value, setValue] = useState(items[1])

  return (
    <div className="Header">
      <div className="Header_leftSide">
        <img src={logo} alt="Consta logo" className="Header_leftSide_logo" />
        <Text view="primary" size="m">
          IssueDeck
        </Text>
      </div>
      <div className="Header_rightSide">
        <div className="Header_rightSide_module">
          <Text size="s">Колонок</Text>
          <ChoiceGroup
            value={value}
            onChange={({ value }) => {
              setValue(value)
              setColsQty(Number(value))
            }}
            items={items}
            getLabel={(item) => item}
            size="xs"
            view="ghost"
            style={{ marginLeft: 'var(--space-xs)' }}
          />
        </div>

        {/* <div className="Header_rightSide_module">
          <Switch size="s" label="Мелкие карточки" checked={false} onChange={}/>
        </div> */}
        <div>{issuesQty.length}</div>

        <div className="Header_rightSide_module">
          <Button
            view="ghost"
            label="Что это такое?"
            size="xs"
            onClick={() => setSidebarSettingsIsOpen(!sidebarSettingsIsOpen)}
          />
        </div>
      </div>
    </div>
  )
}

export default Header

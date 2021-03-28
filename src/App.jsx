import React from 'react'
import './App.scss'
import { Theme, presetGpnDefault } from '@consta/uikit/Theme'
import { Text } from '@consta/uikit/Text'
import Grid from './Components/Grid/Grid'
import Header from './Components/Header/Header'
import SidebarSettings from './Components/SidebarSettings/SidebarSettings'
import { useStoreState } from 'easy-peasy'
import ColumnContent from './Components/ColumnContent/ColumnContent'

function App() {
  const sidebarSettingsIsOpen = useStoreState(
    (state) => state.sidebarSettingsIsOpen
  )
  const columnsQuantity = useStoreState((state) => state.colsQty)

  return (
    <Theme preset={presetGpnDefault}>
      {window.innerWidth < 1000 ? (
        <div className="placeholder">
          <Text size="m" view="secondary">
            Давайте на десктоп
          </Text>
        </div>
      ) : (
        <div style={{ backgroundColor: 'var(--color-bg-primary)' }}>
          {sidebarSettingsIsOpen && <SidebarSettings />}
          <Header />
          <div className="App">
            <Grid cols={columnsQuantity}>
              {[...new Array(columnsQuantity)].map((item, index) => {
                return <ColumnContent key={index} />
              })}
            </Grid>
          </div>
        </div>
      )}
    </Theme>
  )
}
export default App

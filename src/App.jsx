import React from 'react'
import './App.scss'
import { Theme, presetGpnDefault } from '@consta/uikit/Theme'
import Grid from './Components/Grid/Grid'
import Header from './Components/Header/Header'
import SidebarSettings from './Components/SidebarSettings/SidebarSettings'
import { useStoreState } from 'easy-peasy'
import ColumnContent from './Components/ColumnContent/ColumnContent'

function App() {
  const sidebarSettingsIsOpen = useStoreState(
    (state) => state.sidebarSettingsIsOpen
  )
  let columnsQuantity = 4

  return (
    <Theme preset={presetGpnDefault}>
      {sidebarSettingsIsOpen && <SidebarSettings />}
      <Header />
      <div className="App">
        <Grid cols={columnsQuantity}>
          {[...new Array(columnsQuantity)].map((item, index) => {
            return <ColumnContent key={index} />
          })}
        </Grid>
      </div>
    </Theme>
  )
}
export default App

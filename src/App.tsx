import React from 'react';
import './App.scss';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import Grid from './Components/Grid/Grid'
import Header from './Components/Header/Header'
import SidebarSettings from './Components/SidebarSettings/SidebarSettings';
import { State, useStoreState } from 'easy-peasy'
import { ModelTypes } from './store/store'

type StoreState = State<ModelTypes>

function App() {
  const sidebarSettingsIsOpen = useStoreState((state: StoreState) => state.sidebarSettingsIsOpen);
  let columnsQuantity = 4;

  return (
    <Theme preset={presetGpnDefault}>
      {sidebarSettingsIsOpen && <SidebarSettings />}
      <Header />
      <div className="App">
        <Grid cols={columnsQuantity}>
          {
            [...new Array(columnsQuantity)].map((item, index) => {
              return <div key={index}>{'col ' + index}</div>
            })
          }
        </Grid>
      </div>
    </Theme>
  );
}
export default App;
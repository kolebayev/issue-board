import React from 'react';
import './Header.scss';
import { Text } from '@consta/uikit/Text'
import { Button } from '@consta/uikit/Button'
import { useStoreActions, Actions, useStoreState, State } from 'easy-peasy';
import { ModelTypes } from '../../store/store'

type StoreActions = Actions<ModelTypes>;
type StoreState = State<ModelTypes>

function Header() {
  const setSidebarSettingsIsOpen = useStoreActions((actions: StoreActions) => actions.setSidebarSettingsIsOpen)
  const sidebarSettingsIsOpen = useStoreState((state: StoreState) => state.sidebarSettingsIsOpen);
  return (
    <div className="Header">
      <Text view="primary" size='m'>CONSTALOGO | IssueDeck</Text>
      <Button view='ghost' label='А це шо?' size='xs' onClick={() => setSidebarSettingsIsOpen(!sidebarSettingsIsOpen)} />
    </div>
  );
}

export default Header;

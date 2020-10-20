import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageData from './pages/createOrphanage/OrphanageData';
import SelectMapPosition from './pages/createOrphanage/SelectMapPosition';
import OrphanagesDetails from './pages/OrphanagesDetails';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' },
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />,
          }}
          name="OrphanagesDetails"
          component={OrphanagesDetails}
        />
        <Screen
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />,
          }}
          name="SelectMapPosition"
          component={SelectMapPosition}
        />
        <Screen
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />,
          }}
          name="OrphanageData"
          component={OrphanageData}
        />
      </Navigator>
    </NavigationContainer>
  );
}

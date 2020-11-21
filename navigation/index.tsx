import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { Accueil } from '../screens/Accueil'
import { RallyesDisponibles } from '../screens/RallyesDisponibles'
import { RallyeIndisponible } from '../screens/RallyeIndisponible'
import { AccueilRallye } from '../screens/AccueilRallye';
import { Regles } from '../screens/Regles'
import { RallyeEtape1 } from '../screens/RallyeEtape1';
import { RallyeQ1 } from '../screens/RallyeQ1';
import { RallyeQ2 } from '../screens/RallyeQ2';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Accueil" component={Accueil} options={{ headerShown: false }}/>
      <Stack.Screen name="RallyesDisponibles" component={RallyesDisponibles} options={{ title: 'Rallyes disponibles' }}/>
      <Stack.Screen name="RallyeIndisponible" component={RallyeIndisponible} options={{ title: 'Rallyes indisponibles' }}/>
      <Stack.Screen name="AccueilRallye" component={AccueilRallye} options={{ title: 'Accueil Rallye' }}/>
      <Stack.Screen name="Regles" component={Regles} options={{ title: 'Règles' }}/>
      <Stack.Screen name="RallyeEtape1" component={RallyeEtape1} options={{ title: 'Parcours' }}/>
      <Stack.Screen name="RallyeQ1" component={RallyeQ1} options={{ title: 'Question 1', headerLeft: () => null }}/>
      <Stack.Screen name="RallyeQ2" component={RallyeQ2} options={{ title: 'Question 2', headerLeft: () => null }}/>
    </Stack.Navigator>
  );
}

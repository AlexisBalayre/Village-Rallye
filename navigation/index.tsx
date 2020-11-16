import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { Accueil } from '../screens/Accueil'
import { RallyesDisponibles } from '../screens/RallyesDisponibles'
import { AccueilRallye } from '../screens/AccueilRallye';
import { Regles } from '../screens/Regles'
import { RallyeEtape1 } from '../screens/RallyeEtape1';
import { RallyeQ1 } from '../screens/RallyeQ1';
import { RallyeQ2 } from '../screens/RallyeQ2';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Accueil" component={Accueil} />
      <Stack.Screen name="RallyesDisponibles" component={RallyesDisponibles} />
      <Stack.Screen name="AccueilRallye" component={AccueilRallye} />
      <Stack.Screen name="Regles" component={Regles} />
      <Stack.Screen name="RallyeEtape1" component={RallyeEtape1} />
      <Stack.Screen name="RallyeQ1" component={RallyeQ1} />
      <Stack.Screen name="RallyeQ2" component={RallyeQ2} />
    </Stack.Navigator>
  );
}

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { Accueil } from '../screens/Accueil'
import { RechercheScreen } from '../screens/RechercheScreen'
import { RallyesDisponibles } from '../screens/RallyesDisponibles'
import { RallyeIndisponible } from '../screens/RallyeIndisponible'
import { AccueilRallye } from '../screens/AccueilRallye';
import { Regles } from '../screens/Regles'
import { RallyeEtape1 } from '../screens/RallyeEtape1';
import { ReponseScreen } from '../screens/ReponseScreen';
import { RallyeQ1 } from '../screens/RallyeQ1';
import { RallyeQ2 } from '../screens/RallyeQ2';
import { RallyeQ3 } from '../screens/RallyeQ3';
import { RallyeQ4 } from '../screens/RallyeQ4';
import { RallyeQ5 } from '../screens/RallyeQ5';
import { RallyeQ6 } from '../screens/RallyeQ6';
import { RallyeQ7 } from '../screens/RallyeQ7';
import { RallyeQ8 } from '../screens/RallyeQ8';
import { RallyeQ9 } from '../screens/RallyeQ9';
import { RallyeQ10 } from '../screens/RallyeQ10';
import { RallyeQ11 } from '../screens/RallyeQ11';
import { RallyeQ12 } from '../screens/RallyeQ12';
import { RallyeQ13 } from '../screens/RallyeQ13';
import { RallyeQ14 } from '../screens/RallyeQ14';
import { RallyeQ15 } from '../screens/RallyeQ15';
import { RallyeQ16 } from '../screens/RallyeQ16';
import { RallyeQ17 } from '../screens/RallyeQ17';
import { RallyeQ18 } from '../screens/RallyeQ18';
import { RallyeQ19 } from '../screens/RallyeQ19';
import { RallyeQ20 } from '../screens/RallyeQ20';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootStackScreen />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const MainStack = createStackNavigator<RootStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Accueil" component={Accueil} options={{ headerShown: false }}/>
      <MainStack.Screen name="RallyesDisponibles" component={RallyesDisponibles} options={{ title: 'Rallyes disponibles' }}/>
      <MainStack.Screen name="RallyeIndisponible" component={RallyeIndisponible} options={{ title: 'Rallyes indisponibles' }}/>
      <MainStack.Screen name="AccueilRallye" component={AccueilRallye} options={{ title: 'Accueil Rallye' }}/>
      <MainStack.Screen name="Regles" component={Regles} options={{ title: 'Règles' }}/>
      <MainStack.Screen name="RallyeEtape1" component={RallyeEtape1} options={{ title: 'Parcours' }}/>
      <MainStack.Screen name="RallyeQ1" component={RallyeQ1} options={{ title: 'Question 1', gestureEnabled:false, headerLeft: () => null}}/>
      <MainStack.Screen name="RallyeQ2" component={RallyeQ2} options={{ title: 'Question 2', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ3" component={RallyeQ3} options={{ title: 'Question 3', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ4" component={RallyeQ4} options={{ title: 'Question 4', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ5" component={RallyeQ5} options={{ title: 'Question 5', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ6" component={RallyeQ6} options={{ title: 'Question 6', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ7" component={RallyeQ7} options={{ title: 'Question 7', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ8" component={RallyeQ8} options={{ title: 'Question 8', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ9" component={RallyeQ9} options={{ title: 'Question 9', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ10" component={RallyeQ10} options={{ title: 'Question 10', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ11" component={RallyeQ11} options={{ title: 'Question 11', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ12" component={RallyeQ12} options={{ title: 'Question 12', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ13" component={RallyeQ13} options={{ title: 'Question 13', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ14" component={RallyeQ14} options={{ title: 'Question 14', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ15" component={RallyeQ15} options={{ title: 'Question 15', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ16" component={RallyeQ16} options={{ title: 'Question 16', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ17" component={RallyeQ17} options={{ title: 'Question 17', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ18" component={RallyeQ18} options={{ title: 'Question 18', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ19" component={RallyeQ19} options={{ title: 'Question 19', gestureEnabled:false, headerLeft: () => null }}/>
      <MainStack.Screen name="RallyeQ20" component={RallyeQ20} options={{ title: 'Question 20', gestureEnabled:false, headerLeft: () => null }}/>
    </MainStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="RechercheScreen" component={RechercheScreen} options={{ headerShown: false }}/>
      <RootStack.Screen name="ReponseScreen" component={ReponseScreen} options={{ headerShown: false }}/>
    </RootStack.Navigator>
  );
}


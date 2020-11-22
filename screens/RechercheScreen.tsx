import React from 'react'
import { View } from '../components/Themed';
import { StyleSheet } from 'react-native'
import { BarreRecherche } from '../components/BarreRecherche'
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { Button } from 'react-native-elements';


type Props = StackScreenProps<RootStackParamList, 'RechercheScreen'>;

export class RechercheScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  _displayCity = (list_rallye: []) => {
    if (list_rallye.length == 0) {
      this.props.navigation.navigate("RallyeIndisponible") 
    }
    else {
      this.props.navigation.navigate("RallyesDisponibles", { list_rallye }) 
    }
  } 

  render() {
    return (
      <View style={styles.main_container}>
         <BarreRecherche displayCity={this._displayCity}/>
         <View style={styles.Button}>
          <Button type="clear" onPress={() => this.props.navigation.goBack()} title="Annuler " />
         </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
  },
  Button: {
    flex:1,
    alignContent: 'center',
    flexDirection: 'row',
    marginTop: 27,
    
  }
})

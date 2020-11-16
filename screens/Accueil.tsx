import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native'
import { BarreRecherche } from '../components/BarreRecherche'
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'Accueil'>;

export class Accueil extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  _displayCity = (data: {
    distance: string,
    distanceValue: number
  }[]) => {
    this.props.navigation.navigate("RallyesDisponibles", { data }) 
  } 

  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.titre}>
            Bienvenue sur village-rallye, l'application qui permet de découvrir tout en marchant, les plus beaux sites et villages français !
        </Text>
        <View style={styles.container}>
            <Text style={styles.titre2}>
                  Chercher un rallye 
            </Text>
            <BarreRecherche displayCity={this._displayCity}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  container: {
    marginTop: 10,
    flex:1
  },
  texte: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,

  },
  titre: {
    marginLeft: 20,
    marginRight: 10,
    marginTop: 10,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left'

  },
  titre2: {
    marginTop: 8,
    fontSize: 25,
    marginLeft: 20,
    marginRight: 20
  }
})

import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, FlatList } from 'react-native';
import Rallyes from '../Helpers/RallyesData';
import { RallyeItem } from '../components/RallyeItem';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Constants from 'expo-constants';

type Props = StackScreenProps<RootStackParamList, 'RallyesDisponibles'>;

export class RallyesDisponibles extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  // Navigation vers AccueilRallye
  _displayDetailRallye = (nom:string) => {
    this.props.navigation.navigate("AccueilRallye", { nom })
  }

  render() {
    var x: any;
    var rallyes = Rallyes;
    const data = this.props.route.params.data
    // Mise à jour des attributs distances de l'objet Rallye
    for (x in data) {
      rallyes[x].distance = data[x].distance
      rallyes[x].distancevalue = data[x].distanceValue 
    };
    // Villes triées par ordre croissant à partir de la distance
    rallyes.sort(function(a, b){return a.distancevalue - b.distancevalue});
    return (
      <View style={styles.main_container}>
        <Text style={styles.titre}>
          Rallyes à proximité
        </Text>
        <FlatList
            style={styles.container}
            data={rallyes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <RallyeItem rallye={item} displayDetailRallye={this._displayDetailRallye}
            />}
            onEndReachedThreshold={0.5}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    marginTop: 8,
    flex:1, 
  },
  titre: {
    marginTop: 18,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})


import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, FlatList } from 'react-native';
import Rallyes from '../Helpers/RallyesData';
import RallyeItem from '../Components/RallyeItem';

class RallyesDisponibles extends React.Component {
  // Navigation vers AccueilRallye
  _displayDetailRallye = (nom) => {
    this.props.navigation.navigate("AccueilRallye", { nom })
  }

  render() {
    var rallyes = Rallyes;
    // Mise à jour des attributs distances de l'objet Rallye
    for (x in this.props.navigation.state.params.data) {
      rallyes[x].distance = this.props.navigation.state.params.data[x].distance 
      rallyes[x].distancevalue = this.props.navigation.state.params.data[x].distanceValue 
    };
    // Villes triées par ordre croissant à partir de la distance
    rallyes.sort(function(a, b){return a.distancevalue - b.distancevalue});
    return (
      <View style={styles.main_container}>
        <Text style={styles.titre}>
          Oups, pas encore de rallye disponible ici !
        </Text>
        <FlatList
            style={styles.container}
            data={rallyes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <RallyeItem rallye={item} ville={this.props.navigation.state.params.nom} displayDetailRallye={this._displayDetailRallye}
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
    backgroundColor: 'white'
  },
  container: {
    marginTop: 8,
    flex:1, 
  },
  titre: {
    marginTop: 8,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default RallyesDisponibles
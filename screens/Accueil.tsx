import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native'
import BarreRecherche from '../Components/BarreRecherche'
import Rallyes from '../Helpers/RallyesData';

class Accueil extends React.Component {
  _displayCity = (nom, data) => {
    const rallyes = Rallyes; // Base de données 
    var x;
    var present = false;
    for (x in rallyes) {
      if (rallyes[x].nom == nom) {
        present = true;
      }
    }
    if (present == true) {
      this.props.navigation.navigate("AccueilRallye", { nom })
    }
    else {
      this.props.navigation.navigate("RallyesDisponibles", { nom, data }) 
    }
  } 
  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.titre}>
            Bienvenue dans la Vallée de Cheuvreuse !
        </Text>
        <View style={styles.container}>
            <Text style={styles.titre2}>
                  Chercher un rallye 
            </Text>
            <BarreRecherche style={styles.BarreRecherche} displayCity={this._displayCity}/>
        </View>
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
    marginTop: 30,
    flex:1
  },
  titre: {
    marginTop: 20,
    fontSize: 31,
    fontWeight: 'bold',
    textAlign: 'center'

  },
  titre2: {
    marginTop: 20,
    fontSize: 25,
    marginLeft: 20,
    marginRight: 20
  }
})

export default Accueil
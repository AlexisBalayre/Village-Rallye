import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, Button } from 'react-native';
import Rallyes from '../Helpers/RallyesData';

class RallyeEtape1 extends React.Component {
  render() {
    var id = this.props.navigation.state.params.id;
    const rallyes = Rallyes; // Base de données 
    return (
      <View style={styles.main_container}>
        <Text style={styles.titre}>
            {rallyes[id].title}
        </Text>
        <View style={styles.container}>
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
      flex:6,
      paddingLeft: 20,
      paddingRight: 20
    },
    titre: {
      marginTop: 20,
      fontSize: 31,
      fontWeight: 'bold',
      marginLeft: 10,
      marginRight: 10,
      textAlign: 'center'
    },
    texte: {
      fontSize: 25,
      flex:1
    },
    button: {
      flex:1,
      marginTop: 20
    }
})

export default RallyeEtape1
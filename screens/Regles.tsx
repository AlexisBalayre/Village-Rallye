import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

class Regles extends React.Component {
  render() {
    const id = this.props.navigation.state.params.id;
    const texte = 'Plusieurs itinéraires seront disponibles. Chacun d’entre eux vous proposera des photos et des questions relatives à l’histoire des sites ou du village.\n\nSur une seule et même application téléchargée, vous pouvez jouer tout seul ou à plusieurs.\nSi vous souhaitez jouer en équipe, chaque chef d’équipe télécharge son application et choisit un itinéraire différent.\n\nA la fin du parcours pédestre (environ 1h30 à 2h) vous obtiendrez les résultats de votre questionnaire.'
    return (
      <SafeAreaView style={styles.main_container}>
        <ScrollView>
          <Text style={styles.titre}>
              Règles du jeu
          </Text>
          <View style={styles.container}>
              <Text style={styles.texte}>
                {texte}
              </Text>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 30, height:50}}  containerStyle={{borderRadius: 30}} type="outline" title='Démarrer le rallye' onPress={() => {
                  this.props.navigation.navigate("RallyeEtape1", { id })
              }}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }  
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      backgroundColor: 'white',
    },
    container: {
      marginTop: 30,
      flex:6
    },
    titre: {
      flex:1,
      marginTop: 20,
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'left',
      paddingLeft: 20,
      paddingRight: 12
    },
    texte: {
      flex:1,
      fontSize: 21,
      textAlign: 'left',
      paddingLeft: 20,
      paddingRight: 12
    },
    button: {
      flex:1,
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 20,
      marginBottom: 20
    }
})

export default Regles
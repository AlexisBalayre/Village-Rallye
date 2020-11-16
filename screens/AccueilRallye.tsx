import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, Image, SafeAreaView, ScrollView, Button } from 'react-native';
import Rallyes from '../Helpers/RallyesData';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'AccueilRallye'>;

export class AccueilRallye extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const rallyes = Rallyes; // Base de données 
    var id: any;
    var x: any;
    for (x in rallyes) {
      if (rallyes[x].nom == this.props.route.params.nom) {
        id = x;
      }
    }
    return (
      <View style={styles.main_container}>
        <ScrollView>
          <View style={styles.main_container_2}>
            <Image
              style={styles.image}
              source={rallyes[id].photo2}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}>{rallyes[id].title}</Text>
              </View>
              <View style={styles.description_container}>
                <Text style={styles.date_text}>Durée : {rallyes[id].duree}</Text>
                <View style={styles.button}>
                   <Button title="Passer la partie Histoire" onPress={() => {this.props.navigation.navigate("Regles", { id })}}/>
                </View>
                <View style={styles.description_container_bis}> 
                  <Text style={styles.description_text}>{rallyes[id].description}</Text>
                </View>
              </View>
            </View>
            <View style={styles.button}>
                <Button title='Voir les règles du jeu' onPress={() => {this.props.navigation.navigate("Regles", { id })}}/>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  main_container_2: {
    marginTop: 20,
    marginBottom: 20
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: 'center'
  },
  container: {
    marginTop: 30,
    flex:1
  },
  content_container: {
    flex: 1,
    marginTop: 20
  },
  header_container: {
    flex: 1
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center'
  },
  description_container: {
    flex: 6,
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  description_container_bis: {
    flex: 1,
    marginTop: 15,
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    fontSize: 17,
  },
  button: {
    marginTop: 10,
    flex:1,
  },
  date_text: {
    textAlign: 'left',
    fontSize: 18
  }
})


import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, Image} from 'react-native';
import { Button } from 'react-native-elements';
import Rallyes from '../Helpers/RallyesData';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'RallyeQ1'>;

export class RallyeQ1 extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const id_parcours = this.props.route.params.id_parcours;
    const id = this.props.route.params.id;
    const rallyes = Rallyes; // Base de données 
    var rallyes_reponse = {
      Q1: ''
    }
    return (
      <View style={styles.main_container}>
        <Text style={styles.texte}>
          {rallyes[id].rallye.question1.enonce}
        </Text>
        <Image
              style={styles.image}
              source={rallyes[id].rallye.question1.photo}
            />
        <View style={styles.container}>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:40}} containerStyle={{borderRadius: 20}} title={rallyes[id].rallye.question1.reponse1} onPress={() => {
                  rallyes_reponse.Q1 = 'A';
                  this.props.navigation.navigate("RallyeQ2", { id, id_parcours, rallyes_reponse })
              }}/>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:40}}  containerStyle={{borderRadius: 20}} title={rallyes[id].rallye.question1.reponse2} onPress={() => {
                  rallyes_reponse.Q1 = 'B';
                  this.props.navigation.navigate("RallyeQ2", { id, id_parcours, rallyes_reponse })
              }}/>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:40}}  containerStyle={{borderRadius: 20}} title={rallyes[id].rallye.question1.reponse3} onPress={() => {
                  rallyes_reponse.Q1 = 'C';
                  this.props.navigation.navigate("RallyeQ2", { id, id_parcours, rallyes_reponse })
              }}/>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:40}}  containerStyle={{borderRadius: 20}} title={rallyes[id].rallye.question1.reponse4} onPress={() => {
                  rallyes_reponse.Q1 = 'D';
                  this.props.navigation.navigate("RallyeQ2", { id, id_parcours, rallyes_reponse })
              }}/>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:40}}  containerStyle={{borderRadius: 20}} title={rallyes[id].rallye.question1.reponse5} onPress={() => {
                  rallyes_reponse.Q1 = 'E';
                  this.props.navigation.navigate("RallyeQ2", { id, id_parcours, rallyes_reponse })
              }}/>
          </View>
        </View>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20
    },
    container: {
      flex:3,
      paddingLeft: 20,
      paddingRight: 20
    },
    image: {
      marginTop: 15,
      paddingLeft: 20,
      paddingRight: 20,
      width: 140,
      height: 190,
      alignSelf: 'center'
    },
    texte: {
      marginTop: 15,
      fontSize: 21,
      textAlign: 'left',
    },
    button: {
      marginTop: 18
    }
})



import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Rallyes from '../Helpers/RallyesData';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'RallyeQ2'>;

export class RallyeQ2 extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const id_parcours = this.props.route.params.id_parcours;
    const id = this.props.route.params.id;
    const rallyes = Rallyes; // Base de données 
    var rallyes_reponse = this.props.route.params.rallyes_reponse;
    return (
      <View style={styles.main_container}>
       <ScrollView>
        <Image
              style={styles.image}
              source={rallyes[id].rallye.question2.photo}
        />
         <Text style={styles.texte}>
          {rallyes[id].rallye.question2.enonce}
        </Text>
        <View style={styles.container}>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:40}} containerStyle={{borderRadius: 20}} title={rallyes[id].rallye.question2.reponse1} onPress={() => {
                  rallyes_reponse.Q2 = 'A';
              }}/>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:40}}  containerStyle={{borderRadius: 20}} title={rallyes[id].rallye.question2.reponse2} onPress={() => {
                  rallyes_reponse.Q2 = 'B';
              }}/>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:40}}  containerStyle={{borderRadius: 20}} title={rallyes[id].rallye.question2.reponse3} onPress={() => {
                  rallyes_reponse.Q2 = 'C';
              }}/>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:40}}  containerStyle={{borderRadius: 20}} title={rallyes[id].rallye.question2.reponse4} onPress={() => {
                  rallyes_reponse.Q2 = 'D';
              }}/>
          </View>
        </View>
       </ScrollView>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20,
    },
    container: {
      flex:1,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20
    },
    image: {
      flex:1,
      marginTop: 15,
      paddingLeft: 20,
      paddingRight: 20,
      width: 330,
      height: 150,
      alignSelf: 'center'
    },
    texte: {
      flex: 1,
      marginTop: 15,
      paddingLeft: 20,
      paddingRight: 20,
      fontSize: 21,
      textAlign: 'left'
    },
    button: {
      flex: 1,
      marginTop: 20
    }
})


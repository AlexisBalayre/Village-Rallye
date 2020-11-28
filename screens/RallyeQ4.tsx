import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, Image, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Constants from 'expo-constants';

type Props = StackScreenProps<RootStackParamList, 'RallyeQ4'>;

export class RallyeQ4 extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const id_parcours = this.props.route.params.id_parcours;
    const rallye = this.props.route.params.rallye;
    var rallyes_reponse = this.props.route.params.rallyes_reponse;
    return (
      <View style={styles.main_container}>
       <ScrollView>
         <Text style={styles.texte}>
          {rallye.rallye.question4.enonce}
          <Text style={styles.innerText}>{rallye.rallye.question4.question}</Text>
        </Text>
        <View style={styles.container}>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:45}} containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question4.reponse1} onPress={() => {
                  rallyes_reponse.Q4 = 'A';
                  this.props.navigation.navigate("RallyeQ5", { rallye, id_parcours, rallyes_reponse });
              }}/>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:45}}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question4.reponse2} onPress={() => {
                  rallyes_reponse.Q4 = 'B';
                  this.props.navigation.navigate("RallyeQ5", { rallye, id_parcours, rallyes_reponse });
              }}/>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:45}}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question4.reponse3} onPress={() => {
                  rallyes_reponse.Q4 = 'C';
                  this.props.navigation.navigate("RallyeQ5", { rallye, id_parcours, rallyes_reponse });
              }}/>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:45}}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question4.reponse4} onPress={() => {
                  rallyes_reponse.Q4 = 'D';
                  this.props.navigation.navigate("RallyeQ5", { rallye, id_parcours, rallyes_reponse });
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
      paddingBottom: Constants.statusBarHeight,
    },
    container: {
      flex:1,
      paddingLeft: 20,
      paddingRight: 20,
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
     innerText:{
      marginTop: 15,
      fontSize: 21,
      textAlign: 'left',
      fontWeight: 'bold',
    },
    texte: {
      flex: 1,
      marginTop: 15,
      fontSize: 21,
      textAlign: 'left'
    },
    button: {
      flex: 1,
      marginTop: 20
    }
})


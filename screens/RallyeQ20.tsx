import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, Image, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Constants from 'expo-constants';

type Props = StackScreenProps<RootStackParamList, 'RallyeQ20'>;

export class RallyeQ20 extends React.Component<Props> {
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
        <Image
              style={styles.image}
              source={rallye.rallye.question20.photo}
        />
         <Text style={styles.texte}>
          {rallye.rallye.question20.enonce}
        </Text>
        <View style={styles.container}>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:45}} containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question20.reponse1} onPress={() => {
                  rallyes_reponse.Q20 = 'A';
              }}/>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:45}}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question20.reponse2} onPress={() => {
                  rallyes_reponse.Q20 = 'B';
              }}/>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:45}}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question20.reponse3} onPress={() => {
                  rallyes_reponse.Q20 = 'C';
              }}/>
          </View>
          <View style={styles.button}>
              <Button buttonStyle={{borderRadius: 20, height:45}}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question20.reponse4} onPress={() => {
                  rallyes_reponse.Q20 = 'D';
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


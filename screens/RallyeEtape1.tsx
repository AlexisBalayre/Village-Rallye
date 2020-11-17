import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Constants from 'expo-constants';

type Props = StackScreenProps<RootStackParamList, 'RallyeEtape1'>;

export class RallyeEtape1 extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const id = this.props.route.params.id;
    var id_parcours;
    return (
      <View style={styles.main_container}>
        <Text style={styles.titre}>
            Sélectionner un parcours
        </Text>
        <View style={styles.container}>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 30, height:60}} containerStyle={{borderRadius: 30}} title='Parcours 1' onPress={() => {
                    id_parcours=1;
                    this.props.navigation.navigate("RallyeQ1", { id, id_parcours })
                }}/>
            </View>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 30, height:60}}  containerStyle={{borderRadius: 30}} title='Parcours 2' onPress={() => {
                    id_parcours=2;
                    this.props.navigation.navigate("RallyeQ1", { id, id_parcours })
                }}/>
            </View>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 30, height:60}}  containerStyle={{borderRadius: 30}} title='Parcours 3' onPress={() => {
                    id_parcours=3;
                    this.props.navigation.navigate("RallyeQ1", { id, id_parcours })
                }}/>
            </View>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 30, height:60}}  containerStyle={{borderRadius: 30}} title='Parcours 4' onPress={() => {
                    id_parcours=4;
                    this.props.navigation.navigate("RallyeQ1", { id, id_parcours })
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
      paddingTop: Constants.statusBarHeight,
    },
    container: {
      marginTop: 50,
      flex:1,
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
      flex:1
    }
})


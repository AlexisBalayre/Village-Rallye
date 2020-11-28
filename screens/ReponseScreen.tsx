import React from 'react'
import { View } from '../components/Themed';
import { StyleSheet } from 'react-native'
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { Button } from 'react-native-elements';


type Props = StackScreenProps<RootStackParamList, 'ReponseScreen'>;

export class ReponseScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.main_container}>
         <View style={styles.Button}>
          <Button type="clear" onPress={() => this.props.navigation.goBack()} title="Annuler " />
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
  Button: {
    flex:1,
    alignContent: 'center',
  }
})

import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Rallyes from '../Helpers/RallyesData';


type Props = StackScreenProps<RootStackParamList, 'RallyeIndisponible'>;

export class RallyeIndisponible extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  // Navigation vers AccueilRallye
  _displayDetailRallye = (id:number) => {
    this.props.navigation.navigate("AccueilRallye", { id })
  }

  render() {
    const rallye = Rallyes; // Base de données 
    return (
      <View style={styles.main_container}>
        <Text style={styles.titre}>
          Pas de rallyes à proximité ! 
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignContent: 'center',
  },
  container: {
    marginTop: 8,
    flex:1, 
  },
  titre: {
    marginTop: 18,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})


import { cpuUsage } from 'process';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class RallyeItem extends React.Component {
  render() {
    const { rallye, ville, displayDetailRallye } = this.props
    return (
      <TouchableOpacity
        style={styles.main_container}
        onPress={() =>{
         displayDetailRallye(rallye.nom)}}>
        <Image
          style={styles.image}
          source={rallye.photo1}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{rallye.title}</Text>
          </View>
          <View style={styles.info_container}>
            <Text style={styles.date_text}>Distance de {ville} : {rallye.distance}</Text>
            <Text style={styles.description_text} numberOfLines={6}>{rallye.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    main_container: {
      height: 200,
      flexDirection: 'row',
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 10
    },
    image: {
      width: 110,
      height: 185
    },
    content_container: {
      flex: 1,
      marginLeft: 8,
    },
    header_container: {
      flex: 3,
      flexDirection: 'row'
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    vote_text: {
      fontWeight: 'bold',
      fontSize: 26,
      color: '#666666'
    },
    info_container: {
      flex: 8
    },
    description_text: {
      fontStyle: 'italic',
      color: '#666666',
      fontSize: 15,
      marginTop: 8
    },
    date_text: {
      textAlign: 'left',
      fontSize: 15,
    }
  })

export default RallyeItem
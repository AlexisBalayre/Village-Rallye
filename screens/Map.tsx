import React from 'react'
import { View } from '../components/Themed';
import MapContainer from '../Components/MapContainer';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

class Map extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <MapContainer />
          </View>
        );
    }
}
    
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
    }
});

export default Map;
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Rallyes from '../Helpers/RallyesData';


class BarreRecherche extends React.Component {
    render() {
        const { displayCity } = this.props;
        const rallyes = Rallyes; // Base de données 
        var x;
        
        // Distance Matrix API 
        function Distance(place_id_origin, nom) {
            var place_id_destination = []; 
            for (x in rallyes) {
                place_id_destination.push("place_id:" + data[x].place_id)
            }
            var place_id_origine = 'place_id:' + place_id_origin
            var distance = require('react-native-google-matrix');
            distance.apiKey = 'AIzaSyDcxO2UB2tPBIXSEqpHRGv5o1zeHtTjPPI'; // Clée API 
            distance.get(
            {
                origin: place_id_origine,
                destinations: place_id_destination
            },
            function(err, data) {
                displayCity(nom, data)
            }
            );  
        }
        
        return (
            <View style={styles.container}>
                
                <GooglePlacesAutocomplete
                    placeholder='Saisir une ville à proximité'
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'Search'}
                    renderLeftButton={()  => <Icon name="search" size={18} color='#9F9F9F' style={{
                        paddingTop: 17,
                        marginLeft: 20
                    }}/>}
                    currentLocation={true}
                    currentLocationLabel="Ma position"
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    enableHighAccuracyLocation={true}
                    onPress={(data) => {
                        console.log(data)
                        var place_id = data['place_id'];
                        var nom = data['name'];
                        if (nom == null) {
                            nom = data['structured_formatting']['main_text']
                        }
                        Distance(place_id, nom)
                    }}
                    query={{
                        key: 'AIzaSyDcxO2UB2tPBIXSEqpHRGv5o1zeHtTjPPI',
                        language: 'fr',
                        components: 'country:fr',
                        types: '(cities)'
                    }}
                    GooglePlacesSearchQuery={{ rankby: 'distance', type: 'locality' }}
                    debounce={200}
                    styles={{
                        textInputContainer: {
                            height: 55,
                            backgroundColor: '#F2F3F4',
                            borderRadius: 30,
                            marginLeft: 10,
                            marginRight: 10

                        },
                        textInput: {
                          flex:1,
                          height: 55,
                          marginLeft: 5,
                          marginRight:10,
                          backgroundColor: '#F2F3F4',
                          color: '#010101',
                          fontSize: 18,
                          borderRadius: 30,
                        }
                      }}
                />
              
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20
  }
});

export default BarreRecherche;
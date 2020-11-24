import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import Rallyes from '../Helpers/RallyesData';
import Constants from 'expo-constants';

export interface Props {
    displayCity: Function;
  }

export class BarreRecherche extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        if(this.ref.current) {
          this.ref.current.focus();
        }
      }

    render() {
        const { displayCity } = this.props;
        var rallyes = Rallyes; // Base de données 
        var x: any; 
        const DistanceMax = 50000; // Distance maximale des rallyes 
        // Distance Matrix API 
        function Distance(place_id_origin: string) {
            var place_id_destination = []; 
            for (x in rallyes) {
                place_id_destination.push("place_id:" + rallyes[x].place_id)
            }
            var place_id_origine = 'place_id:' + place_id_origin
            var distance = require('react-native-google-matrix');
            distance.apiKey = 'AIzaSyDcxO2UB2tPBIXSEqpHRGv5o1zeHtTjPPI'; // Clée API 
            distance.get(
            {
                origin: place_id_origine,
                destinations: place_id_destination
            },
            // Calcul des distances
            function(err: object, data: {
                distance: string
                distanceValue: number
            }[]) {
                // Initialisation de la liste de rallyes
                var list_rallye = [];
                // Mise à jour des attributs distances de l'objet Rallye
                for (x in data) {
                    rallyes[x].distance = data[x].distance
                    rallyes[x].distancevalue = data[x].distanceValue 
                };
                // Remplissage liste d'objets Rallye 
                for (x in rallyes) {
                    if (rallyes[x].distancevalue <= DistanceMax) {
                        list_rallye.push(rallyes[x])
                    }   
                }
                // Tri de la liste en fonction de la distance
                list_rallye.sort(function(a, b){return a.distancevalue - b.distancevalue});
                // Fonction de navigation vers RallyesDisponibles
                displayCity(list_rallye)
            }
            );  
        }
        return (
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    ref={this.ref}
                    placeholder='Saisir une ville à proximité'
                    minLength={1}
                    autoFocus={true}
                    returnKeyType={'Search'}
                    renderLeftButton={()  => <Icon name="search" size={18} color='#9F9F9F' style={{
                        paddingTop: 17,
                        marginLeft: 20
                    }}/>}
                    keyboardShouldPersistTaps='always'
                    currentLocation={true}
                    currentLocationLabel="Ma position"
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    enableHighAccuracyLocation={true}
                    onPress={(data) => {
                        var place_id = data['place_id'];
                        Distance(place_id)
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
                          fontSize: 18,
                          borderRadius: 30
                        },
                        poweredContainer: {
                            flex:1,
                            alignItems: 'center',
                            borderBottomRightRadius: 5,
                            borderBottomLeftRadius: 5,
                            borderTopWidth: 0.5,
                        },
                        row: {
                            flex:1,
                            height: "100%", 
                            flexDirection: 'row'
                          },
                          separator: {
                            height: 0.5,
                          },
                        container: {
                            flex:1,
                        },
                        listView: {
                            marginTop:10,
                            flex:1,
                        },
                        loader: {
                            alignItems: 'baseline',
                          },
                      }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 20,
  }
});

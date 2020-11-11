import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

class MapInput extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Chercher un rallye'
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'Search'}
                    listViewDisplayed={false}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        this.props.notifyChange(details.geometry.location);
                    }}
                    query={{
                        key: 'AIzaSyDcxO2UB2tPBIXSEqpHRGv5o1zeHtTjPPI',
                        language: 'fr',
                        components: 'country:fr'
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={200}
                    style={{
                        textInputContainer: {
                            flexDirection: 'row',
                          },
                          textInput: {
                            backgroundColor: '#FFFFFF',
                            height: 44,
                            borderRadius: 5,
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            fontSize: 15,
                            flex: 1,
                          },
                          poweredContainer: {
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            borderBottomRightRadius: 5,
                            borderBottomLeftRadius: 5,
                            borderColor: '#c8c7cc',
                            borderTopWidth: 0.5,
                          },
                          powered: {},
                          listView: {},
                          row: {
                            backgroundColor: '#FFFFFF',
                            padding: 13,
                            height: 44,
                            flexDirection: 'row',
                          },
                          separator: {
                            height: 0.5,
                            backgroundColor: '#c8c7cc',
                          }
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      paddingTop: Constants.statusBarHeight + 10
    },
  });

export default MapInput;
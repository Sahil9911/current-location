import React, { useState } from 'react';
import {View, Text, StyleSheet } from  'react-native';
import Geolocation from '@react-native-community/geolocation';
import Geocode from "react-geocode";

const App = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  Geolocation.getCurrentPosition(data=>{
    setLatitude(data.coords.latitude);
    setLongitude(data.coords.longitude);
  })
  Geocode.setApiKey("AIzaSyCx9pkknlZqVO5_yK0RrhzRbwqZ3O-nEvU");
  Geocode.fromLatLng(latitude, longitude).then(
    response => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    error => {
      console.error(error);
    }
  );
  return (
    <View style={styles.container}>
      <Text>Latitude - { latitude }</Text>
  <Text>Longitude - { longitude }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: 'center'
  }
});

export default App;
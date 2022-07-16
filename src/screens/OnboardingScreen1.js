import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Onboarding1 = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      style={styles.onboarding0}
      source={require('../components/images/onboarding2.png')}
    />
    <Text style={styles.textSmall}>Want To Find Personalised</Text>
    <Text style={styles.textLarge}>HAIRSTYLES</Text>
    <TouchableOpacity onPress={()=> navigation.navigate('Onboarding2')} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText1}>CONTINUE</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('SplashScreen')}>
      <Text style={styles.appButtonText2}>SKIP</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ED145B',
  },
  onboarding0: {
    width: 176,
    height: 176,
  },
  textSmall: {
    fontSize: 11.06,
    color: 'white',
    fontWeight: '100',
    fontFamily: 'Gotham',
  },
  textLarge: {
    fontSize: 44.25,
    fontWeight: '800',
    color: 'white',
  },
  appButtonContainer: {
    width: 112,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 106,
  },
  appButtonText1: {
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 20,
    fontSize: 10,
    fontFamily: 'Gotham',
    textAlign: 'center',
  },
  appButtonText2: {
    marginTop: 40,
    fontSize: 10,
    fontFamily: 'Gotham',
    color: '#00000091',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Onboarding1;

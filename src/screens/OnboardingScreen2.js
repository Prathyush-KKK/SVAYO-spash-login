import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Onboarding2 = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      style={styles.onboarding0}
      source={require('../components/images/onboarding3.png')}
    />
    <Text style={styles.textSmall}>Want To Find Best</Text>
    <Text style={styles.textLarge}>OFFERS</Text>
    <Text style={styles.textSmall}>On Your Haircut</Text>
    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.appButtonContainer}>
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
    width: 218,
    height: 218,
  },
  textSmall: {
    fontSize: 13.74,
    color: 'white',
    fontWeight: '100',
    fontFamily: 'Gotham',
    lineHeight: 13.15,
  },
  textLarge: {
    fontSize: 54.9797,
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

export default Onboarding2;

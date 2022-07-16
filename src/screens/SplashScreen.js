import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require('../components/images/logoBig.png')}
    />
    <TouchableOpacity onPress={() => navigation.navigate('Onboarding0')} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText2}>x</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8e4eb',
  },
  logo: {
    width: 275,
    height: 105,
  },
  appButtonContainer: {
    height: 15,
    width: 15,
    backgroundColor: '#ED145B',
    borderRadius: 20,
    position: 'absolute',
    textAlign: 'center',
    bottom: 13,
    left: 13,
  },
});

export default SplashScreen;

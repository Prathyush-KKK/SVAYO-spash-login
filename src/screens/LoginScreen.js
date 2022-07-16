import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  CheckBox,
  TouchableOpacity,
} from 'react-native';

const Login = ({ navigation }) => (
  <>
    <View style={styles.app}>
      <View style={styles.container}>
        <Image
          style={styles.onboarding0}
          source={require('../components/images/logoSmall.png')}
        />
        <Text style={styles.textSmall}>
          DISCOVER &nbsp;&nbsp; INFLUENCE &nbsp;&nbsp; UPSTYLE
        </Text>
      </View>
      <View style={styles.container2}>
        <Text style={(styles.textSmall, styles.loginText)}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="+91&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;Phone Number "
        />
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>"I Accept SVAYO's" </Text>
          <Text style={styles.labelBlue}>"Terms of Service"</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText1}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#f8e4eb',
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ED145B',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8e4eb',
  },
  onboarding0: {
    width: 143,
    height: 59,
  },
  textSmall: {
    fontSize: 11.06,
    color: 'white',
    fontWeight: '800',
    fontFamily: 'Gotham',
    marginTop: 28,
  },

  loginText: {
    color: 'black',
    fontWeight: 400,
    marginBottom: 24,
    fontSize: 16,
  },

  input: {
    width: 252,
    height: 40,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, .5)',
    padding: 16,
    marginBottom: 32,
  },

  checkbox: {
    width: 12,
    height: 12,
    marginTop: 3,
    marginRight: 6,
  },

  label: {
    color: 'rgb(38, 38, 38)',
    fontSize: 12,
  },

  labelBlue: {
    color: '#1E4CEC',
    fontSize: 12,
  },

  checkboxContainer: {
    flexDirection: 'row',
    marginLeft: 6,
  },
  appButtonContainer: {
    width: 100,
    height: 36,
    backgroundColor: '#ED145B',
    borderRadius: 20,
    marginTop: 56,
    textAlign: 'center',
  },
  appButtonText1: {
    color: 'white',
    fontWeight: '400',
    paddingTop: 11,
    fontSize: 11,
    fontFamily: 'Gotham',
        textAlign: 'center',
  },
});

export default Login;

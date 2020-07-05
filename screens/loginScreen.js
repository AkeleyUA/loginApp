import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const registrationHandler = () => {
    navigation.navigate('Registration');
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          placeholder="Enter email"
        />
        <TextInput
          style={styles.input}
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="off"
          placeholder="Enter password"
          secureTextEntry
        />
        <TouchableOpacity style={[styles.btn, styles.login]}>
          <Text style={[styles.btnText, styles.btnTextLogin]}>Sing in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={registrationHandler}
          style={[styles.btn, styles.registration]}>
          <Text style={[styles.btnText, styles.btnTextRegistration]}>
            Registration
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 25,
    marginTop: 150,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
    marginBottom: 15,
    borderRadius: 4,
  },
  login: {
    backgroundColor: '#115293',
  },
  registration: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  btnText: {
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  btnTextLogin: {
    color: '#FFF',
  },
  btnTextRegistration: {
    color: '#115293',
  },
});

export default LoginScreen;
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import store from '../store/auth';

const SettingsScreen = () => {
  const {onLogout} = store;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => onLogout()}>
        <Text style={styles.btnText}>Sing out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
    marginBottom: 15,
    borderRadius: 4,
    backgroundColor: '#115293',
  },
  btnText: {
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#FFF',
  },
});

export default observer(SettingsScreen);

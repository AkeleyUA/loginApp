import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingVertical: 30,
    alignItems: 'center',
    backgroundColor: '#cecece',
  },
});

export default WelcomeScreen;

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

function Loading(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <Image
        source={require('../../../assets/logo-corona.png')}
        style={styles.logo}
      />
      <ActivityIndicator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 187,
    height: 221,
    resizeMode: 'contain',
    marginBottom: 10,
  }
})

export default Loading;
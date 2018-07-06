import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

function Empty(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 16
  }
})

export default Empty
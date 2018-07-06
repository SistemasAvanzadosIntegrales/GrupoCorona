import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function LayoutList (props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
  },
})

export default LayoutList
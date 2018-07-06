import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function Vehicle(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.rating} | {props.year}</Text>
        </View>

        <View style={styles.right}>
          <Icon 
            name="chevron-right" 
            size={20} 
            color="#A4A4A4" 
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D1D1',
    marginBottom: 5,
    borderRadius: 2,
    padding: 15,
  },
  left: {
    flex: 1,
  },
  right: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    color: '#6B6B6B',
  },
  subtitle: {
    color: '#BABABA',
    fontSize: 16,
  }
})

export default Vehicle
import React, { Component } from 'react';
import {
  Text,
  StatusBar,
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../sections/components/headerNoSearch';

class About extends Component {

  render() {
    return (
      <SafeAreaView>
        <StatusBar
          backgroundColor="#262626"
          barStyle="light-content"
        />
        <Header title={'ACERCA DE ESTA APP'} />
        <View style={styles.container} >
          <View style={styles.container_text} >
            <Text style={styles.title} >What is Lorem Ipsum?</Text>
            <Text style={styles.text} >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  container_text: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 2,
    padding: 15,
  },
  title: {
    fontSize: 16,
    padding: 5,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    paddingHorizontal: 10,
    textAlign: 'justify',
  }
})

export default connect(null)(About);
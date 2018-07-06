import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Logo from '../../sections/containers/logo';
import Menu from '../../sections/containers/menu';

function Header(props) {
  return (
    <View>
      <SafeAreaView style={styles.statusBar}>
        <View style={styles.container}>
          <Logo />
          <View style={styles.header_text_container}>
            <Text style={styles.header_text}>{props.title}</Text>
          </View>
          <Menu />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_text_container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusBar: {
    backgroundColor: '#262626',
  }
})

export default Header;

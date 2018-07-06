import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native'
import { DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function Drawer(props) {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Icon style={styles.icon} name="user-circle" size={30} color="#4FD2D5" />
          </View>
          <View>
            <Text style={styles.maintitle} >Roberto Ramírez</Text>
            <Text style={styles.secondarytitle} >Administrador</Text>
          </View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#303030',
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    flex: 1,
  },
  icon: {
    marginLeft: 12,
    marginRight: 13,
  },
  maintitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  secondarytitle: {
    fontSize: 11,
    color: '#ECECEC',
  },
})

export default Drawer

import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function Service(props) {

  let color = '';
  if ( props.status ) {
    color = "#8BCE46"
  }
  else {
    color = "#DF0000"
  }

  return (
    <View style={styles.container}>
      <View style={ styles.left }>
        <Text style={ styles.title }>${ props.cost }</Text>
        <Text style={ styles.subtitle }>{ props.provider.name } | { props.date }</Text>
      </View>

      <View style={styles.right}>
        <Icon 
          name="circle" 
          size={20} 
          color={ color }
        />

        <Menu style={styles.menu}>
          <MenuTrigger style={styles.menutrigger} >
            <Icon 
              name="ellipsis-v" 
              size={20} 
              color="#A4A4A4"
            />
          </MenuTrigger>
          <MenuOptions style={styles.menuoptions}>
            <MenuOption style={styles.menuoption} onSelect={ props.onPress } >
                <Icon name="pencil" size={20} color="#A4A4A4" style={styles.icon} />
                <Text>Editar</Text>
            </MenuOption>
            <MenuOption style={styles.menuoption} onSelect={ props.onDestroy } >
                <Icon name="trash" size={20} color="#A4A4A4" style={styles.icon} />
                <Text>Eliminar</Text>  
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    </View>
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
  menutrigger: {
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuoptions: {
    padding: 10,
  },
  menuoption: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    flex: 1,
  },
  right: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    flexDirection: 'row',
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

export default Service
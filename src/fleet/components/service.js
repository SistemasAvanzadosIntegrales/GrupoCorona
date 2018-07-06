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

function Document(props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.rating} | {props.year}</Text>
      </View>

      <View style={styles.right}>
        <Icon 
          name="circle" 
          size={20} 
          color="#9BFF4D"
        />

        <Menu style={styles.menu}>
          <MenuTrigger style={styles.menutrigger} text={ 
            <Icon 
              name="ellipsis-v" 
              size={20} 
              color="#A4A4A4"
            /> } 
          />
          <MenuOptions style={styles.menuoptions}>
            <MenuOption style={styles.menuoption} onSelect={ props.onPress } >
                <Icon name="pencil" size={20} color="#A4A4A4" style={styles.icon} />
                <Text>Editar</Text>  
            </MenuOption>
            <MenuOption style={styles.menuoption} onSelect={ () => alert('Descargar') } >
                <Icon name="cloud-download" size={20} color="#A4A4A4" style={styles.icon} />
                <Text>Descargar</Text>  
            </MenuOption>
            <MenuOption style={styles.menuoption} onSelect={ () => alert('Eliminar') } >
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

export default Document
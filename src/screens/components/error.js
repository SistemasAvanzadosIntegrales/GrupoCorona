import React from'react'
import {
    View,
    ActivityIndicator,
    StyleSheet,
    Dimensions,
    Text,
} from'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

// We can use this to make the overlay fill the entire width
let { width, height } = Dimensions.get('window');

const ErrorText = props => (
    <View style={ styles.error } >
      <Icon style={ styles.icon } name="exclamation-triangle" size={20} color="#D8000C" />
      <Text style={ styles.texterror } >
        { props.text }
      </Text>
    </View>
)

const styles = StyleSheet.create({
    error: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFD2D2',
      width: width,
      height: 35,
      flexDirection: 'row',
      marginTop: 30,
    },
    texterror: {
      color: '#D8000C',
      marginLeft: 10,
    }
})

export default ErrorText


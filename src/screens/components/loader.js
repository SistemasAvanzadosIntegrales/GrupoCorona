import React from'react'
import {
    View,
    ActivityIndicator,
    StyleSheet,
    Dimensions,
} from'react-native'

// We can use this to make the overlay fill the entire width
let { width, height } = Dimensions.get('window');

const Loader = props => (
    <View style={ styles.overlay } >
        <ActivityIndicator size='large'/>
    </View>
)

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: width,
    height: height,
    zIndex: 9999,
  }
})

export default Loader
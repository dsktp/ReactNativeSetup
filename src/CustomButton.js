import { StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
      alignSelf:"center",
      alignItems:"center",
      width:"80%",
        backgroundColor: "#e0ffff",
        padding: 10,
        borderRadius: 100,
        marginTop:"5%"
    },
    text:{
        color: 'blue',
        fontSize: 20,

    }

})
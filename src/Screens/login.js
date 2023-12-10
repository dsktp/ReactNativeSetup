import {Alert,StyleSheet,TextInput, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import CustomButton from '../CustomButton'
import Checkbox from 'expo-checkbox';
// import { ScrollView } from 'react-native-web';

const intailvalue={
  email:"",password:""
}
const Login = () => {
  const handleButtonPress = () => {
    Alert.alert('Button Pressed!');
    // Add your custom logic or navigation here
  };
  const [isChecked, setChecked] = useState(false);
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  return (

  <ScrollView style={{backgroundColor: "#87ceeb",flex:1,borderRadius:20,marginTop:25}}> 
 <Text style={{marginTop:"25%",alignSelf:"center",fontSize:50,color:"blue",fontWeight:"700"}}>Login here,</Text>
 <Text style={{marginTop:"5%",alignSelf:"center",fontSize:15,color:"white"}}>Welcome back you've have been missed!</Text> 

<TextInput
        style={styles.input}
        textColor="white"
        placeholder="Email"
      />
         <TextInput
        style={styles.input2}
        onChangeText={text=>setpassword(password)}
        textColor="white"
        secureTextEntry
        placeholder="Password"
      />
      <View style={{flexDirection:"row"}}>
       <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={{color:"white",marginTop:"5%",marginLeft:5}}>i have read and agreed with the TC</Text>
        </View>
    <CustomButton onPress={handleButtonPress} title="Sign in"
    />


<View  style={{flexDirection:"row",alignSelf:"center",marginTop:20}}>
    <Image
        style={styles.img1}
        source={require('../../assets/google.png')}
      />
       <Image
        style={styles.img2}
        source={require('../../assets/facebook.png')}
      />
       <Image
        style={styles.img3}
        source={require('../../assets/github.png')}
      />

    </View>

    <Text style={{textDecorationLine: 'underline',alignSelf:"center",color:"blue"}}>
      Contine with!
    </Text>


</ScrollView> 
  )
}

export default Login

const styles = StyleSheet.create({
    input:{
        marginTop:'20%',
    backgroundColor: 'white',
    width:"80%",
    borderRadius:100,
    alignSelf:"center",
    padding:10
    }
    ,
    input2:{
        marginTop:'5%',
    backgroundColor: 'white',
    width:"80%",
    borderRadius:100,
    alignSelf:"center",
    padding:10
    },
    checkbox: {
      marginTop:"5%",
      marginLeft:50
    },
    img1:{
      height:50,
      width:50,
      borderRadius:100
    },
    img2:{
      marginLeft:10,
      height:50,
      width:50,
      borderRadius:100
    },
    img3:{
      marginLeft:10,
      height:50,
      width:50,
      borderRadius:100
    }
})
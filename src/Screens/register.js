import { Alert,StyleSheet,Text,TextInput,View,Image, ScrollView } from 'react-native'
import {createUserWithEmailAndPassword } from "firebase/auth";
import React from 'react'
import CustomButton from '../CustomButton'
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { auth } from '../config/firebase';

// import { ScrollView } from 'react-native-web';
const handleRegister=async(email,password)=>{

try{
  const response= await createUserWithEmailAndPassword(auth, email, password)
  console.log(response)
}
catch(error){
console.log('error', error)
}


  
 
}

const Register = () => {
  const handleButtonPress = () => {
    Alert.alert('Button Pressed!');
    // Add your custom logic or navigation here
  };
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [isChecked, setChecked] = useState(false);
 return (     
<ScrollView style={{backgroundColor: "#87ceeb",borderRadius:20,marginTop:25}}>
<Text style={{marginTop:"10%",alignSelf:"center",fontSize:50,color:"blue",fontWeight:"700"}}>Create Account</Text>
 <Text style={{marginTop:"5%",alignSelf:"center",fontSize:15,color:"white"}}>Create an account so you can explore all things</Text>

<TextInput
style={styles.input}
textColor="white"
autoCapitalize='none'
value={email}
onChangeText={(text)=>setEmail(text)}
name="email"
placeholder="Email"
/>
 <TextInput
style={styles.input2}
autoCapitalize='none'
textColor="white"
password={password}
onChangeText={(text)=>setPassword(text)}
// name="password"
secureTextEntry
placeholder="Password"
/>
 <TextInput
style={styles.input3}
textColor="white"
secureTextEntry
placeholder="Confirm Password"
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
    <CustomButton onPress={handleRegister} title="Sign up"  />

    <View style={{flexDirection:"row",alignSelf:"center",marginTop:20}}>
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

export default Register

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
        marginTop:'10%',
    backgroundColor: 'white',
    width:"80%",
    borderRadius:100,
    alignSelf:"center",
    padding:10
    },
    input3:{
        marginTop:'10%',
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
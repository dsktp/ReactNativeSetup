import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Login from './src/Screens/login';
import Register from './src/Screens/register';
import Dashboard from './src/Screens/dashboard';
import LoginScreen from './src/Screens/loginscreen'
import AppointmentScreen from './src/Screens/AppointmentScreen';
import AppointmentList from './src/Screens/AppointmentList';
import PatientList from './src/Home/Patients/patientList';
import PatientListScreen from './src/Screens/PatientListScreen'
import PatientForm from './src/Home/Patients/PatientForm';
// import styles from "./appStyle"




const Tab = createBottomTabNavigator();
export default function App() {
  return (
 <View style={{backgroundColor: "#87ceeb",flex:1,borderRadius:50,marginTop:25}}>
{/* <Login/> */}
{/* <Register/> */}
<NavigationContainer>
<Tab.Navigator>
      {/* <Tab.Screen name="Dashboard" component={Dashboard} /> */}
      {/* <Tab.Screen name="LoginScreen" component={LoginScreen} /> */}
      <Tab.Screen name="PatientForm" component={PatientForm} />
      <Tab.Screen name="AppointmentScreen" component={AppointmentScreen} />
      <Tab.Screen name="AppointmentList" component={AppointmentList} />
      {/* <Tab.Screen name="PatientListScreen" component={PatientListScreen} /> */}
      <Tab.Screen name="PatientList" component={PatientList} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
    </NavigationContainer>
</View> 


  );
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lightblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   Text:{
//     fontSize: 100,
//   }
// });

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  const retrieveAppointments = async () => {
    try {
      const storedAppointments = await AsyncStorage.getItem('appointments');
      if (storedAppointments !== null) {
        const parsedAppointments = JSON.parse(storedAppointments);
        setAppointments(parsedAppointments);
      }
    } catch (error) {
      console.error('Error retrieving appointments:', error);
    }
  };

  useEffect(() => {
    retrieveAppointments();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Doctor Appointments</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.appointmentItem}>
            <Text style={styles.Text}>Patient Name: {item.patientName}</Text>
            {/* Add more fields as needed */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appointmentItem: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  text:{
    fontSize: 18,
    // fontWeight:"500"
  }
});

export default AppointmentList;

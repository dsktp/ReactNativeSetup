import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppointmentScreen = ({ navigation }) => {
  const { control, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    try {
      // Retrieve existing appointments or initialize an empty array
      const existingAppointments = await AsyncStorage.getItem('appointments');
      const appointments = existingAppointments
        ? JSON.parse(existingAppointments)
        : [];

      // Add the new appointment to the array
      appointments.push(data);

      // Save the updated array back to AsyncStorage
      await AsyncStorage.setItem('appointments', JSON.stringify(appointments));

      console.log('Appointment added successfully:', data);

      // Optionally, navigate to the appointment list screen
      navigation.navigate('AppointmentList');
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Add Doctor Appointment</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
          style={styles.input}
            placeholder="Patient Name"
            onChangeText={(text) => setValue('patientName', text)}
            value={field.value}
          />
        )}
        name="patientName"
        rules={{ required: 'Patient name is required' }}
      />
      {/* Add more fields as needed */}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    marginTop:'5%',
    marginBottom:"5%",
backgroundColor: 'white',
width:"80%",
borderRadius:100,
alignSelf:"center",
padding:10
},
});

export default AppointmentScreen;

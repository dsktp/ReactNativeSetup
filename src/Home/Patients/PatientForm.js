import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const PatientForm = () => {
  const { control, handleSubmit, setValue } = useForm();
  const navigation = useNavigation();

  const onSubmit = async (data) => {
    try {
      // Save data to AsyncStorage
      await AsyncStorage.setItem('patientData', JSON.stringify(data));
      console.log('Data saved successfully:', data);

      // Navigate to the PatientList page
      navigation.navigate('PatientList');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Patient Information</Text>
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
text:{
  fontWeight:"500",
}
});

export default PatientForm;

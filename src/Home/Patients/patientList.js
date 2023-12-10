import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  const retrieveData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('patientData');
      if (storedData !== null) {
        const parsedData = JSON.parse(storedData);
        // Update the patients state
        setPatients((prevPatients) => [...prevPatients, parsedData]);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Patients List</Text>
      <FlatList
        data={patients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.patientItem}>
            <Text>Patient Name: {item.patientName}</Text>
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
  patientItem: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default PatientList;

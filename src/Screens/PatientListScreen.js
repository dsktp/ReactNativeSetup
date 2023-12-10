import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const PatientListScreen = () => {
  // Dummy patient data for testing
  const patients = [
    { id: '1', name: 'John Doe', age: 35, contact: '123-456-7890' },
    { id: '2', name: 'Jane Smith', age: 28, contact: '987-654-3210' },
    // Add more patient data as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient List</Text>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.patientCard}>
            <Text>{item.name}</Text>
            <Text>{`Age: ${item.age}`}</Text>
            <Text>{`Contact: ${item.contact}`}</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  patientCard: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 16,
    marginBottom: 8,
  },
});

export default PatientListScreen;

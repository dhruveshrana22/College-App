// AddPersons.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { collection, addDoc, getFirestore } from '@react-native-firebase/firestore';
import firebaseConfig from '../firebaseConnection';

const AddPersons = ({ navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const handleSave = async () => {
    try {
      // Get the same Firestore instance initialized in index.js
      const firestore = getFirestore(firebaseConfig);

      // Add a new document with a generated id to the "UserDetail" collection
      const docRef = await addDoc(collection(firestore, 'UserDetail'), {
        name,
        surname,
        mobileNo,
      });

      console.log('Document written with ID: ', docRef.id);

      // Navigate back to the previous screen
      navigation.goBack();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleCancel = () => {
    // Navigate back to the previous screen without saving
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Add Person</Title>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        label="Surname"
        value={surname}
        onChangeText={(text) => setSurname(text)}
        style={styles.input}
      />
      <TextInput
        label="Mobile No."
        value={mobileNo}
        onChangeText={(text) => setMobileNo(text)}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Save
      </Button>
      <Button mode="outlined" onPress={handleCancel} style={styles.button}>
        Cancel
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});

export default AddPersons;

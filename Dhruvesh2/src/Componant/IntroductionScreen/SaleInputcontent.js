import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

function Salecontent() {
    const [customer, setCustomer] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const naviagtion = useNavigation();

    const handleAddItems = () => {
        naviagtion.navigate("Add Items to Sale")

    };

    return (
        <>
            <View style={{ padding: 20, backgroundColor: 'white', height: "auto" }}>
                {/* Customer Input */}
                <TextInput
                    label="Customer"
                    value={customer}
                    onChangeText={text => setCustomer(text)}
                    style={{ marginBottom: 10 }}
                />

                {/* Phone Number Input */}
                <TextInput
                    label="Phone Number"
                    value={phoneNumber}
                    onChangeText={text => setPhoneNumber(text)}
                    style={{ marginBottom: 10 }}
                />

                {/* Add Items Button */}
                <Button
                    mode="contained"
                    onPress={handleAddItems}
                    style={{ backgroundColor: '#2196F3', marginBottom: 20 }}
                >
                    Add Items
                </Button>

                {/* Total Amount Row */}

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, padding: 40 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 10 }}>Total Amount</Text>
                <Text style={{ fontSize: 18 }}>Rs.</Text>
            </View>
        </>
    );
}

export default Salecontent;

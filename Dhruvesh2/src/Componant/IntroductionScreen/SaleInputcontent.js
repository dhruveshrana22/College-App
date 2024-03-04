import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import MyComponent from './Save&NewButton';
import { useDispatch, useSelector } from 'react-redux';

function Salecontent({ invoiceNo, selectedDate, savedInvoiceNo, invoicePrefix }) {
    const [customer, setCustomer] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigation = useNavigation();
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const dispatch = useDispatch();
   
  const saleItems = useSelector((state) => state.saleItems.saleItems);
  console.log("dc", saleItems);
    const handleAddItems = () => {
        navigation.navigate("Add Items to Sale");
    };

    const handleSave = () => {
        // Save logic here
        console.log('Sale data saved successfully');

        // Reset the form after saving
        setCustomer('');
        setPhoneNumber('');
        setItems([]);
        setTotalAmount(0);

        // Navigate after saving
        navigation.goBack();
    };

    const renderItem = ({ item, index }) => (
        <View key={index} style={{ padding: 10, backgroundColor: 'white', marginVertical: 5 }}>
          {/* Display item details, customize this according to your structure */}
          <Text>{item.itemName}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Text>Total: {item.totalAmount}</Text>
          {/* Add more details as needed */}
        </View>
      );

    const calculateTotalAmount = () => {
        // Calculate total amount based on the rates of the items
        const totalAmount = items.reduce((acc, item) => {
            const rate = parseFloat(item.rate) || 0;
            const quantity = parseFloat(item.quantity) || 0;
            const itemTotal = rate * quantity;
            return acc + itemTotal;
        }, 0);

        return totalAmount.toFixed(2); // Format total amount to display as currency
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
            <FlatList
        data={saleItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, padding: 40 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 10 }}>Total Amount</Text>
                <Text style={{ fontSize: 18 }}>Rs.{calculateTotalAmount()}</Text>
            </View>
            <MyComponent onSave={handleSave} />
        </>
    );
}

export default Salecontent;

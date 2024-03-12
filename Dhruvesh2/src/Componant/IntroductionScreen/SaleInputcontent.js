import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import MyComponent from './Save&NewButton';
import { useDispatch, useSelector } from 'react-redux';
import { useSaleContext } from '../../Screen/Sale/SaleContext';

function Salecontent({ invoiceNo, selectedDate, savedInvoiceNo, invoicePrefix }) {
    const [customer, setCustomer] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigation = useNavigation();
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const dispatch = useDispatch();
    const { saleDataList, clearSaleDataList, deleteSaleData } = useSaleContext();
    //   const saleItems = useSelector((state) => state.saleItems.saleItems);
    //   console.log("dc", saleItems);
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

        // Clear saleDataList
        clearSaleDataList();
        // Navigate after saving
        navigation.goBack();
    };


    console.log("saleDataList", saleDataList)
    // Define the data to display in FlatList
    const data = saleDataList ? saleDataList : [];



    useEffect(() => {
        setItems(saleDataList || []);
    }, [saleDataList]);


    const handleDelete = (item) => {
        // Implement your delete logic here
        deleteSaleData(item);
    };
    const renderItem = ({ item }) => (
        <TouchableOpacity >
            <View style={styles.cardContainer}>
                <View style={styles.cardContent}>
                    <Text style={styles.itemName}>{item.itemName}:</Text>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Quantity: {item.quantity}</Text>
                        <Text style={styles.infoText}>Unit: {item.unit}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Rate: {item.rate}</Text>
                        <Text style={styles.infoText}>Tax Type: {item.taxType}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Discount: {item.discount}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.TotalinfoText}>Total Amount: {item.totalAmount}</Text>
                    </View>
                </View>
                <View style={styles.deleteButtonContainer}>
                <TouchableOpacity onPress={() => handleDelete(item)} style={styles.deleteButtonContainer}>
      <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>

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
            {saleDataList && (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.uniqueIdentifier}
                    renderItem={renderItem}
                />

            )}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, padding: 40 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 10 }}>Total Amount</Text>
                <Text style={{ fontSize: 18 }}>Rs.{calculateTotalAmount()}</Text>
            </View>
            <MyComponent onSave={handleSave} />
        </>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        elevation: 3, // for shadow on Android
        shadowColor: '#000', // for shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    itemNameContainer: {
        flex: 1,
    },
    itemNameText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemDetailsContainer: {
        flex: 3,
    },
    deleteButtonContainer: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    infoContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    infoText: {
        fontSize: 16,
    },
    TotalinfoText:{
        fontSize: 20, 
        fontWeight:'900',

    }
});


export default Salecontent;

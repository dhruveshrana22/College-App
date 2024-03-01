import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import { Modal, TextInput, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Salecontent from '../Componant/IntroductionScreen/SaleInputcontent';
import Save_ShareButtoncomponant from '../Componant/IntroductionScreen/Save&NewButton';

function Sale() {
    const [modalVisible, setModalVisible] = useState(false);
    const [invoiceNo, setInvoiceNo] = useState('');
    const [invoicePrefix, setInvoicePrefix] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with the current date
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleSave = () => {
        // Add logic to save the data or perform other actions
        setModalVisible(false);
    };

    const handleDatePress = () => {
        setShowDatePicker(true);
    };

    const handleDateChange = (event, date) => {
        setShowDatePicker(false);
        if (date) {
            setSelectedDate(date);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#E4F2FF' }}>
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 10,
                    paddingHorizontal: 40,
                    backgroundColor: 'white',
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>
                            Invoice No.
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, marginRight: 10, color: 'black' }}>
                                2
                            </Text>
                            <Text style={{ fontSize: 20, color: 'black' }}>v</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 30 }}>|</Text>
                <View style={{ flexDirection: 'column' }}>
                    <Text
                        style={{
                            marginLeft: 10,
                            textAlign: 'center',
                            fontSize: 20,
                            color: 'black',
                        }}>
                        Date
                    </Text>
                    <Text
                        style={{
                            marginLeft: 10,
                            textAlign: 'center',
                            fontSize: 20,
                            color: 'black',
                        }}
                        onPress={handleDatePress}>
                        {selectedDate.toISOString().split('T')[0]}
                    </Text>
                </View>
            </View>

            {showDatePicker && (
                <DateTimePicker
                    style={{ width: 200 }}
                    value={selectedDate}
                    mode="date"
                    placeholder="Select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onChange={handleDateChange}
                />
            )}
            {/* Main Content */}
            <View style={{ flex: 1, padding: 25, }}>
                <Salecontent />
            </View>

            {/* Modal */}
            <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)}>
                <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        style={{ alignSelf: 'flex-end' }}>
                        <Text style={{ marginLeft: 10, fontSize: 30 }}> X </Text>
                    </TouchableOpacity>

                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Invoice No.</Text>
                    </View>

                    <TextInput
                        label="Invoice Prefix"
                        value={invoiceNo}
                        onChangeText={text => setInvoiceNo(text)}
                        style={{ marginVertical: 10 }}
                    />

                    <Button
                        mode="contained"
                        onPress={handleSave}
                        style={{ backgroundColor: 'blue', color: 'white' }}>
                        Save
                    </Button>
                </View>
            </Modal>



            <Save_ShareButtoncomponant />

        </View>
    );
}

export default Sale;

import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import BusinessDetail from './BusinessDetail';

const CustomTextInput = ({ placeholder, value, onChangeText, title, isActive }) => {
    return (
        <View style={{ position: 'relative' }}>
            <Text style={{
                position: 'absolute',
                top: 10,
                left: 20,
                backgroundColor: '#F2F2F2',
                paddingHorizontal: 10,
                zIndex: 2,
            }}>
                {title}
            </Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={{
                    marginVertical: 15,
                    borderWidth: isActive ? 2 : 1,
                    borderColor: isActive ? 'blue' : 'black',
                    borderRadius: 5,
                    paddingHorizontal: 10,
                }}
            />
        </View>
    );
};

const ErrorText = ({ error }) => {
    return <Text style={{ color: 'red', marginTop: 5, marginBottom: 5 }}>{error}</Text>;
};

const Business_Profile = () => {
    const [currentTab, setCurrentTab] = useState('Basic Detail');
    const [activeInput, setActiveInput] = useState(null); // Keep track of the active input

    const [basicDetails, setBasicDetails] = useState({
        signature: '',
        businessName: '',
        GSTIN: '',
        email: '', // New field
        businessAddress: '', // New field
        description: '', // New field
        pincode: '', // New field
    });
    const [businessDetails, setBusinessDetails] = useState({});
    const [errors, setErrors] = useState({
        signature: '',
        businessName: '',
        GSTIN: '',
        email: '', // New field
        businessAddress: '', // New field
        description: '', // New field
        pincode: '', // New field
    });

    const handleInputChange = (field, value) => {
        setBasicDetails({ ...basicDetails, [field]: value });
    };

    const handleBusinessInputChange = (field, value) => {
        setBusinessDetails({ ...businessDetails, [field]: value });
    };

    const handleSave = () => {
        // Add validation logic for new fields
        const requiredFields = ['signature', 'businessName', 'GSTIN', 'email', 'businessAddress', 'description', 'pincode'];

        for (const field of requiredFields) {
            if (basicDetails[field] === '') {
                setErrors({ ...errors, [field]: `${field} is required` });
                return;
            } else {
                setErrors({ ...errors, [field]: '' });
            }
        }

        // Save logic
        console.log('Saved successfully');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 20,
                        }}
                    >
                        <TouchableOpacity onPress={() => setCurrentTab('Basic Detail')}>
                            <Text
                                style={{
                                    color: currentTab === 'Basic Detail' ? 'red' : 'black',
                                    borderBottomWidth: currentTab === 'Basic Detail' ? 2 : 0,
                                    borderBottomColor: 'red',
                                    paddingBottom: 5,
                                    fontSize: 18,
                                }}
                            >
                                Basic Detail
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCurrentTab('Business Detail')}>
                            <Text
                                style={{
                                    color: currentTab === 'Business Detail' ? 'red' : 'black',
                                    borderBottomWidth: currentTab === 'Business Detail' ? 2 : 0,
                                    borderBottomColor: 'red',
                                    paddingBottom: 5,
                                    fontSize: 18,
                                }}
                            >
                                Business Detail
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, position: 'relative' }}>
                        {currentTab === 'Basic Detail' && (
                            <View style={{ padding: 20 }}>

                                <CustomTextInput
                                    title="Business Name"
                                    isActive={activeInput === 'businessName'} // Check if this input is active
                                    value={basicDetails.businessName}
                                    onChangeText={(text) => handleInputChange('businessName', text)}
                                    onFocus={() => setActiveInput('businessName')} // Set active input on focus
                                    onBlur={() => setActiveInput(null)} // Remove active input on blur
                                />
                                {/* <ErrorText error={errors.businessName} /> */}

                                <CustomTextInput
                                    title="GSTIN"
                                    isActive={activeInput === 'GSTIN'}
                                    value={basicDetails.GSTIN}
                                    onChangeText={(text) => handleInputChange('GSTIN', text)}
                                    onFocus={() => setActiveInput('GSTIN')}
                                    onBlur={() => setActiveInput(null)}
                                />
                                {/* <ErrorText error={errors.GSTIN} /> */}

                                <CustomTextInput
                                    title="Email"
                                    isActive={activeInput === 'email'}
                                    value={basicDetails.email}
                                    onChangeText={(text) => handleInputChange('email', text)}
                                    onFocus={() => setActiveInput('email')}
                                    onBlur={() => setActiveInput(null)}
                                />
                                {/* <ErrorText error={errors.email} /> */}

                                <CustomTextInput
                                    title="Business Address"
                                    isActive={activeInput === 'businessAddress'}
                                    value={basicDetails.businessAddress}
                                    onChangeText={(text) => handleInputChange('businessAddress', text)}
                                    onFocus={() => setActiveInput('businessAddress')}
                                    onBlur={() => setActiveInput(null)}
                                />
                                {/* <ErrorText error={errors.businessAddress} /> */}

                                <CustomTextInput
                                    title="Description"
                                    isActive={activeInput === 'description'}
                                    value={basicDetails.description}
                                    onChangeText={(text) => handleInputChange('description', text)}
                                    onFocus={() => setActiveInput('description')}
                                    onBlur={() => setActiveInput(null)}
                                />
                                {/* <ErrorText error={errors.description} /> */}

                                <CustomTextInput
                                    title="Pincode"
                                    isActive={activeInput === 'pincode'}
                                    value={basicDetails.pincode}
                                    onChangeText={(text) => handleInputChange('pincode', text)}
                                    onFocus={() => setActiveInput('pincode')}
                                    onBlur={() => setActiveInput(null)}
                                />
                                {/* <ErrorText error={errors.pincode} /> */}



                            </View>
                        )}
                        {currentTab === 'Business Detail' && (
                            <View style={{ padding: 20 }}>
                                <BusinessDetail />
                            </View>
                        )}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() => console.log('Cancelled')}
                                style={{ flex: 1 }}
                            >
                                <View style={styles.cancelButton}>
                                    <Text style={[styles.buttonText, { textAlign: 'center' }]}>
                                        Cancel
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSave} style={{ flex: 1 }}>
                                <View style={styles.saveButton}>
                                    <Text style={[styles.buttonText, { textAlign: 'center' }]}>
                                        Save
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    saveButton: {
        backgroundColor: 'red',
        padding: 20,
    },
    cancelButton: {
        backgroundColor: 'grey',
        padding: 20,
    },
    buttonText: {
        color: 'white',
    },
});

export default Business_Profile;

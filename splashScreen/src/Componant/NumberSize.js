
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar, AvatarGroup } from '@mui/material';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Snackbar, IconButton } from 'react-native-paper';


const AvatarGroups = ({ avatars }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {avatars.map((avatar, index) => (
                <Image
                    key={index}
                    source={{ uri: avatar.src }}
                    style={{ width: 60, height: 60, borderRadius: 50, marginRight: 5 }}
                />
            ))}
        </View>
    );
};

const RoundButton = ({ onPress, selected, text }) => {
    return (

        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.roundButton,
                { backgroundColor: selected ? '#ec7732' : 'transparent', },
            ]}
        >
            <Text style={[styles.buttonText, { color: selected ? 'white' : 'gray', },]}>{text}</Text>
        </TouchableOpacity>

    );
};

const DetailsScreen = ({ route }) => {
    const [selectedButton, setSelectedButton] = useState(1);
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const showSnackbar = () => {
        setSnackbarVisible(true);
    };

    const hideSnackbar = () => {
        setSnackbarVisible(false);
    };

    const handleButtonPress = (buttonIndex) => {
        setSelectedButton(buttonIndex);
        // Add your logic or actions when a button is pressed
    };

    // Generate round buttons dynamically
    const roundButtons = [
        { id: 1, text: '6' },
        { id: 2, text: '7' },
        { id: 3, text: '8' },
        { id: 4, text: '9' },
        { id: 5, text: '10' },
        { id: 6, text: '11' },
    ];


    const avatars = [
        { id: 1, src: 'https://tse2.mm.bing.net/th?id=OIP.n5CeR93916slWXGyV13PuAHaHa&pid=Api&P=0&h=180' },
        { id: 2, src: 'https://tse1.mm.bing.net/th?id=OIP.LumEDnP72bKh5ulqKDq97gHaEK&pid=Api&P=0&h=180' },
        { id: 3, src: 'https://tse1.mm.bing.net/th?id=OIP.IQQKINmrc54IyAw5Frg64wHaHL&pid=Api&P=0&h=180' },
        { id: 4, src: 'https://example.com/avatar/4.jpg' },
        { id: 5, src: 'https://example.com/avatar/5.jpg' },
    ];

    const { item, backgroundColor } = route.params;

    return (<View>
        <View style={{ padding: 15 }} >
            <View style={[styles.cardContainer, { backgroundColor }]}>
                <Image source={{ uri: item.imageUrl }} style={styles.detailImage} />

                {/* ... other details */}
            </View>
            <View style={{ paddingHorizontal: 10, flexDirection: 'column' }}>
                <View style={{}}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: 'gray', fontSize: 15 }}>
                        Mens Running Shose
                    </Text>
                    <Text style={styles.price}>
                        Rs {item.price}
                    </Text>
                </View>
            </View>
            <View style={{ paddingVertical: "6%" }}>
                <View>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>
                        Select Size
                    </Text>
                </View>
                <View style={styles.sizbtncontainer}>
                    <FlatList
                        data={roundButtons}
                        keyExtractor={(button) => button.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <RoundButton
                                key={item.id}
                                onPress={() => handleButtonPress(item.id)}
                                selected={selectedButton === item.id}
                                text={item.text}
                            />
                        )}
                        contentContainerStyle={styles.sizbtncontainer}

                    />
                </View>
            </View>
            <View style={{ paddingVertical: "0.5%" }}>
                <Text style={{ paddingVertical: "3%", fontSize: 20, color: 'black', fontWeight: '700' }}>
                    Description
                </Text>
                <Text style={styles.subtitle}>{item.description}</Text>
            </View>
            <View style={{ paddingVertical: "5%" }}>
                <Text style={{ paddingVertical: "3%", fontSize: 20, color: 'black', fontWeight: '700' }}>
                    Reviews
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AvatarGroups avatars={avatars} />

                    <TouchableOpacity onPress={showSnackbar}>
                        <Icon name="shopping-cart" style={{ marginLeft: 5, color: '#ec7732', fontSize: 30 }} />
                    </TouchableOpacity>
                    <Snackbar
                        visible={snackbarVisible}
                        onDismiss={hideSnackbar}
                        action={{
                            label: 'OK',
                            onPress: () => {
                                // You can add additional actions here if needed
                                hideSnackbar();
                            },
                        }}
                    >
                        Item added successfully
                    </Snackbar>
                </View>

            </View>
        </View>
    </View>

    );
};

const styles = StyleSheet.create({

    sizbtncontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        gap: 25
    },
    roundButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#000', // You can customize the border color
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'gray',
        fontSize: 16,
        textAlign: 'center',
    },
    cardContainer: {
        flexDirection: 'column',
        backgroundColor: '#FFEDED',
        borderRadius: 30,

        padding: 30,
        alignItems: 'center',
    },
    detailImage: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginTop: 10,
    },
    title: {

        color: 'black',
        fontSize: 33,
        fontWeight: '700',
    },
    subtitle: {
        fontSize: 15,
    },
    price: {
        fontWeight: '700',
        fontSize: 25,
        color: "#ec7732"
    }

});

export default DetailsScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Title } from 'react-native-paper';
import Card from '../Componant/Card';
import Cards from '../Componant/Card';

const MainScreen = ({ data }) => {
    const [buttons, setButtons] = useState([
        { id: '1', text: 'All', selected: true },
        { id: '2', text: 'Shoes', selected: false },
        { id: '3', text: 'Bag', selected: false },
        { id: '4', text: 'Clothing', selected: false },
        { id: '5', text: 'Cap', selected: false },
    ], 1);


    const [selectedButtonId, setSelectedButtonId] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Check if data is defined before filtering
        if (data) {

            const filtered = data.filter(item =>
                item.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [searchText, data]);



    const handleButtonPress = (id) => {
        // Update the button's text color when pressed
        setSelectedButtonId(id);
        setButtons((prevButtons) =>
            prevButtons.map((button) =>
                button.id === id
                    ? { ...button, backgroundColor: '#EC7431', textColor: 'white' }
                    : { ...button, textColor: 'gray' }
            )
        );
    };

    const renderButton = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    backgroundColor: item.id === selectedButtonId
                        ? '#EC7431'
                        : 'transparent',
                },
            ]}
            onPress={() => handleButtonPress(item.id)}
        >
            <Text style={[styles.textButton, { color: item.textColor }]}>{item.text}</Text>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <Title style={styles.title}>Nike Collection</Title>
            <Text style={styles.description}>The Best Way of Nike, all in one place</Text>

            {/* Search Input with Left-side Icon */}
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Search"
                    style={styles.searchInput}
                    underlineColor="#1F41BB"
                    onChangeText={setSearchText}
                    value={searchText}
                />
                <TouchableOpacity style={styles.dotbox}>
                    <Text style={{ fontSize: 10 }}>
                        ._
                    </Text>
                    <Text style={{ fontSize: 10 }}>
                        _.
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <FlatList
                    data={buttons}
                    renderItem={renderButton}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View>
                <Cards />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        color: '#888',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        gap: 20,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        backgroundColor: '#F8F9FB',
        borderRadius: 10,
        paddingHorizontal: 12,
    },
    dotbox: {
        backgroundColor: '#F8F9FB',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        marginLeft: 8,
    },
    buttonContainer: {
        paddingVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        marginTop: 8,
    },
    button: {

        paddingHorizontal: 16,
        padding: 15,
        borderRadius: 25,
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 20,
    }
});

export default MainScreen;





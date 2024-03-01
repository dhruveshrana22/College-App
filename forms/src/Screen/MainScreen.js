import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const MainScreen = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchCountryList = async () => {
        try {
            const response = await fetch('https://restcountries.com/v2/all');
            const data = await response.json();
            console.log('Fetched data:', data);
            setCountries(data);
            setFilteredCountries(data);
        } catch (error) {
            console.error('Error fetching country list:', error);
        }
    };

    useEffect(() => {
        fetchCountryList();
    }, []);


    const handleSearch = (text) => {
        setSearchTerm(text);
        const filtered = countries.filter((country) =>
            country.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredCountries(filtered.length > 0 ? filtered : countries);
    };

    const renderItem = ({ item }) => (
        <View style={styles.countryItem}>
            <Text>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search by country name"
                value={searchTerm}
                onChangeText={handleSearch}
            />
            <FlatList
                data={filteredCountries}
                keyExtractor={(item) => item.alpha3Code}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
    },
    countryItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default MainScreen;

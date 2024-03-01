// Import necessary components and libraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PersonCard = ({ name, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={{
                    margin: 10,
                    width: 180,
                    height: 130,
                    backgroundColor: 'lightblue',
                    borderRadius: 10,
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                <Text style={styles.cardName}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Card = () => {
    const navigation = useNavigation();
    const handleCardPress = (index) => {
        console.log(`Card ${index + 1} Pressed`);
        if (index === 0) {
            navigation.navigate("addperson");
        }
    };

    const renderPersonCards = () => {
        const cardNames = ['Add Person', '', 'Person List', ''];

        return cardNames.map((name, index) => (
            <PersonCard key={index} name={name} onPress={() => handleCardPress(index)} />
        ));
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.column}>{renderPersonCards().slice(0, 2)}</View>
                <View style={styles.column}>{renderPersonCards().slice(2, 4)}</View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        paddingHorizontal: 10,
        gap: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Distribute space between columns
        width: '100%', // Make sure the row takes the full width
    },
    column: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 8, // Adjust the gap between columns
    },
    cardName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Arial', // Adjust the font family as needed
        textAlign: 'center', // Center the text within the view
    },
});

export default Card;

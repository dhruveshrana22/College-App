// Star.js

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Cardsmg from '../Componant/Cardsmg';
import { useNavigation } from '@react-navigation/native';

function Star() {
    const favorites = useSelector((state) => state.likes.favorites);

    console.log("Data Comes from the LIkescreen", favorites)

    const navigation = useNavigation()
    const getRandomColor = (index) => {
        return index % 2 === 0 ? '#FFEDED' : (index % 2 === 1 ? '#ECF1F4' : '#FFEDED');

    };
    return (
        <View style={{}}>

            {/* <FlatList
                data={favorites}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}

            /> */}
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <Cardsmg item={item} backgroundColor={getRandomColor(index)} />
                )}
                showsVerticalScrollIndicator={false}
                vertical={true}
            />
        </View>
    );
}

export default Star;

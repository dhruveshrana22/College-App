import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addtoFavoirate, removeFromFavorites } from '../redux2/LikeRedux/Likeredux';

const CustomHeartCheckbox = ({ card }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.likes.favorites);
    const [isChecked, setIsChecked] = useState(favorites.some(item => item.id === card.id));

    useEffect(() => {
        setIsChecked(favorites.some(item => item.id === card.id));
    }, [favorites, card]);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            dispatch(addtoFavoirate(card));
        } else {
            dispatch(removeFromFavorites(card.id));
        }
    };

    return (
        <TouchableOpacity
            style={[styles.checkboxContainer, isChecked && styles.checked]}
            onPress={handleToggle}
        >
            {isChecked ? (
                <Text style={[styles.heartIcon, styles.checkedHeart]}>❤️</Text>
            ) : (
                <Text style={styles.heartIcon}>🖤</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        top: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    heartIcon: {
        fontSize: 24,
    },
    checkedHeart: {
        color: '#FF0000', // Customize the color of the heart icon when checked
    },
    checkboxLabel: {
        marginLeft: 8,
    },
});

export default CustomHeartCheckbox;

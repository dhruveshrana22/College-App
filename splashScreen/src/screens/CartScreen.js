import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { decrementItem, incrementItem, removeItem } from '../redux2/ADD_To_Cart/Add_to_cart';


// const Cardsmg = ({ item, backgroundColor }) => {
//     const navigation = useNavigation();
//     const [count, setCount] = useState(item.quantity); // Initialize count with item.quantity

//     const handleIncrement = () => {
//         setCount(count + 1);
//     };

//     const handleDecrement = () => {
//         if (count > 0) {
//             setCount(count - 1);
//         }
//     };

//     return (
//         <View style={[styles.cardContainer, { backgroundColor }]}>
//             <View style={styles.iconContainer}>
//                 <Image source={{ uri: item.imageUrl }} style={styles.iconImage} />
//             </View>
//             <View style={styles.contentContainer}>
//                 <Text style={styles.title}>{item.title}</Text>
//                 <Text style={styles.subtitle}>{item.description}</Text>
//                 <View style={styles.priceContainer}>
//                     <Text style={styles.priceText}>{`₹ ${item.price}`}</Text>
//                     <View style={styles.counterContainer}>
//                         <TouchableOpacity style={styles.button} onPress={handleDecrement}>
//                             <Text style={styles.buttonText}>-</Text>
//                         </TouchableOpacity>
//                         <View style={styles.counterTextContainer}>
//                             <Text style={styles.counterText}>{count}</Text>
//                         </View>
//                         <TouchableOpacity style={styles.button} onPress={handleIncrement}>
//                             <Text style={styles.buttonText}>+</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//         </View>
//     );
// };


const CartScreen = ({ backgroundColor }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);



    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        const currentItem = cartItems.find((item) => item.id === itemId);
        if (currentItem.quantity > 1) {
            dispatch(decrementItem(itemId));
        } else {
            dispatch(removeItem(itemId));
        }
    };

    // Calculate total count and price
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, "no");
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);



    const handleCheckout = () => {
        // Implement your checkout logic here
        Alert.alert('Congratulations!', 'You have successfully purchased the product.');
    };

    // const startButtonAnimation = () => {
    //     animatedButtonScale.value = withTiming(1.1, {}, () => {
    //         animatedButtonScale.value = withSpring(1);
    //     });
    // };
    // Calculate total count and price

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ margin: 20, fontSize: 20, color: 'black', fontFamily: '900' }}>Items Add To Cart </Text>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.cardContainer, { backgroundColor }]}>
                        <View style={styles.iconContainer}>
                            <Image source={{ uri: item.imageUrl }} style={styles.iconImage} />
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.subtitle}>{item.description}</Text>
                            <View style={styles.priceContainer}>
                                <Text style={styles.priceText}>{`₹ ${item.price}`}</Text>
                                <View style={styles.counterContainer}>
                                    <TouchableOpacity style={styles.button} onPress={() => handleDecrement(item.id)}>
                                        <Text style={styles.buttonText}>-</Text>
                                    </TouchableOpacity>
                                    <View style={styles.counterTextContainer}>
                                        <Text style={styles.counterText}>{item.quantity}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.button} onPress={() => handleIncrement(item.id)}>
                                        <Text style={styles.buttonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>{`Total Count: ${totalCount}`}</Text>
                <Text style={styles.totalText}>{`Total Price: ₹${totalPrice}`}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    handleCheckout();

                }}
                style={[styles.checkoutButton]}
            >
                <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};




const styles = StyleSheet.create({
    checkoutButton: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 20,
    },

    checkoutButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
    },
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFEDED',
        borderRadius: 30,
        margin: 10,
        padding: 15,
    },
    iconContainer: {

        padding: 15,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconImage: {
        width: 130,
        height: 130,
        borderRadius: 10,
    },

    contentContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        marginVertical: 10,
        color: "black",
        fontSize: 19,
        fontWeight: '700',
    },
    subtitle: {
        fontSize: 15,
    },
    priceContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    priceText: {
        color: "black",
        fontSize: 20,
        fontWeight: '900',
    },
    buyButton: {
        width: 70,
        backgroundColor: 'black',
        padding: 9,
        borderRadius: 20,
    },
    buyButtonText: {
        textAlign: 'center',
        color: 'white',
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },

    button: {
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 10,
        marginHorizontal: 5,
    },

    buttonText: {
        padding: 5,
        color: 'white',
        fontSize: 20,
    },

    counterTextContainer: {
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    counterText: {
        color: 'white',
        fontSize: 16,
    },
    totalContainer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },

    totalText: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
    },

});

export default CartScreen;

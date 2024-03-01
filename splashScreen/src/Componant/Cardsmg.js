import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import CustomHeartCheckbox from "./HeartCustomeCheckbox";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux2/ADD_To_Cart/Add_to_cart";

const Cardsmg = ({ item, backgroundColor }) => {

    const dispatch = useDispatch();

    const handleBuy = () => {
        // Dispatch the action to add the item to the cart
        dispatch(addToCart(item));
    };




    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { item, backgroundColor })}>
            <View style={[styles.cardContainer, { backgroundColor }]}>


                <View style={{ position: 'absolute', left: 10, top: 0 }}>
                    <CustomHeartCheckbox card={item} />
                </View>
                <View style={styles.iconContainer}>

                    <Image source={{ uri: item.imageUrl }} style={styles.iconImage} />

                </View>
                <View style={styles.contentContainer}>

                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.description}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>{`₹ ${item.price}`}</Text>
                        <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
                            <Text style={styles.buyButtonText}>BUY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
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
    topRightContainer: {

        top: 0,
        left: 0,

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
});


export default Cardsmg;
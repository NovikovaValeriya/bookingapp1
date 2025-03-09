import React, { useState } from "react";
import {View,Text,Image,TouchableOpacity,StyleSheet,SafeAreaView,StatusBar,} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function App() {
    const [rating, setRating] = useState(4.6);
    const [isFavorite, setIsFavorite] = useState(false);
    const [dailyRate] = useState(1578);
    const totalImages = 3;
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => console.log("Back")}>
                        <Icon name="chevron-left" size={24} color='rgb(238, 133, 12)' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.internetButton} onPress={() => console.log("Internet")}>
                        <FontAwesome5 name="wifi" size={24} color="#ffffff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require("./assets/my.png")} style={styles.image} />
                    <View style={styles.priceTag}>
                        <Text style={styles.priceTagText}>{dailyRate} ₽ / сутки</Text>
                    </View>
                </View>
                <View style={styles.details}>
                    <View style={styles.titleRow}>
                        <Text style={styles.title}>Студия</Text>
                        <TouchableOpacity onPress={toggleFavorite}>
                            <View style={styles.ratingContainer}>
                                <Icon
                                    name="star"
                                    size={16}
                                    color={isFavorite ? "#f9f9f9" : "#ffcc00"}
                                    style={styles.ratingStar}
                                />
                                <Text style={styles.ratingText}>{rating}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.location}>г. Тюмень, Мельникайте, д. 70</Text>

                    <View style={styles.guestSection}>
                        <Text style={styles.guestText}>Укажите количество гостей</Text>
                        <TouchableOpacity style={styles.addGuestButton}>
                            <Text style={styles.addGuestText}>+ Добавить</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.priceSection}
                        onPress={() => console.log("Выберите дату")}
                    >
                        <View>
                            <Text style={styles.priceText}>
                                {dailyRate} <Text style={styles.currency}>₽</Text><Text style={styles.perNight}>/сутки</Text>
                            </Text>
                            <Text style={styles.chooseDateText}>Выберите даты</Text>
                        </View>
                        <Icon name="chevron-right" size={20} color="#ff6600" />
                    </TouchableOpacity>
                    <View style={styles.discountButton}>
                        <Icon name="star" size={25} color="#fff" style={styles.discountStar} />
                        <Text style={styles.discountText}>Скидка на первое заселение</Text>
                        <Text style={styles.discountPercentage}>10%</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        height: 1100,
    },
    imageContainer: {
        position: "relative",
    },
    image: {
        width: "100%",
        height: 269,
        resizeMode: "cover",
    },
    priceTag: {
        position: "absolute",
        top: 235, 
        left: 5,
        backgroundColor: "#ff6600", 
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        zIndex: 1,
    },
    priceTagText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    details: {
        borderRadius: 12,
        padding: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 12,
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#222",
    },
    location: {
        fontSize: 15,
        color: "#777",
        marginBottom: 12,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderRadius: 14,
    },
    ratingStar: {
        marginRight: 2,
    },
    ratingText: {
        fontSize: 14,
        color: "#555",
    },
    guestSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    guestText: {
        fontSize: 16,
        color: "#333",
    },
    addGuestButton: {
        backgroundColor: "transparent",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    addGuestText: {
        color: "#ff6600",
        fontWeight: "bold",
    },
    priceAndDate: {
        marginBottom: 16,
    },
    priceSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 30,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    priceText: {
        fontSize: 33,
        fontWeight: "bold",
        color: "#222",
    },
    currency: {
        fontSize: 33,
        color: "#222",
    },
    perNight: {
        fontSize: 15,
        color: "#222",
    },
    chooseDateButton: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: "#222",
        borderRadius: 8,
    },
    chooseDateText: {
        color: "#FF6600",
        fontWeight: "bold",
    },
    discountButton: {
        backgroundColor: "rgba(245, 144, 61, 0.98)",
        borderRadius: 12,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 100,
    },
    discountButtonContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    discountStar: {
        marginRight: 8,
        color: "#fff",
    },
    discountText: {
        color: "rgba(255, 255, 255, 0.97)",
        fontWeight: "bold",
        fontSize: 19,
    },
    discountPercentage: {
        fontSize: 45,
        color: "rgba(71, 69, 69, 0.25)",
        fontWeight: "bold",
    },
    dailyRateDiscount: {
        position: "absolute",
        left: 15,
        bottom: 5,
        fontSize: 40,
        color: "rgba(255, 255, 255, 0.97)",
    },
    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    paginationDotActive: {
        backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        borderRadius: 16,
        paddingTop: 16,
        zIndex: 2,
    },
    backButton: {
        backgroundColor: 'rgb(255, 252, 252)',
        borderRadius: 16,
        padding: 8,
    },
    internetButton: {
        padding: 8,
        backgroundColor: "#ff6600",
        borderRadius: 16,
    },
});

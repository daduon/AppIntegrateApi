import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image, TextInput, ActivityIndicator, Alert } from "react-native";

const Smartphone = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [filterData, setFilterData] = useState([]);


    const fetchProduct = async () => {
        try {
            const response = await fetch(
                'https://mocki.io/v1/41eaad0a-fa97-44c9-983f-c8459856ec89'
            );

            const getProduct = await response.json();
            setProduct(getProduct.products);
            setFilterData(getProduct.products);
            setLoading(false);

        } catch (error) {
            console.error(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = filterData.filter(function (item) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setProduct(newData);
            setSearch(text);
        } else {
            setProduct(filterData);
            setSearch(text);
        }
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#5500dc" />
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="Search Here"
            />
            <FlatList
                data={product}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.coverImage}
                        />
                        <View style={styles.metaInfo}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>{item.price} $</Text>
                            <Text style={styles.title}>Tel: <Text style={styles.contact}>{item.contact} </Text></Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#101010',
        marginTop: 60,
        fontWeight: '700'
    },
    listItem: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: 400
    },
    coverImage: {
        width: 80,
        height: 60,
    },
    metaInfo: {
        marginLeft: 10
    },
    title: {
        fontSize: 18,
        color:'#000'
    },
    price: {
        color: "red",
        fontSize: 16,
        fontWeight: '700'
    },
    contact: {
        color: "#a9a9a9"
    },
    textInputStyle: {
        height: 40,
        width:'90%',
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#ccc',
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        marginTop:50,
        color:'#000'
    },
});

export default Smartphone;
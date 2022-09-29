import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, ScrollView, Modal, TouchableOpacity, Pressable,Alert } from "react-native";

const Placetrip = () => {
    const [data, setData] = useState([]);
    // const [modal, setModal] = useState(false);

    const fetchPlaceTrip = async () => {
        try {
            const response = await fetch(
                'https://mocki.io/v1/90a1e6b5-73c2-40b6-8108-c70aba306896'
            );

            const getData = await response.json();
            setData(getData.placetrip);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPlaceTrip();
    }, []);

    // function popup(){
    //     setModal(true)
    // }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {
                    data.map((item,key) => {
                        return (
                            <View key={key}>
                                {/* <Modal
                                    visible={modal}
                                    onRequestClose={() => setModal(false)}>
                                    <Pressable style={styles.outsideModal}
                                        onPress={(event) => { if (event.target == event.currentTarget) { setModal(false); } }} >
                                        <View style={styles.modal}>
                                            <View style={styles.modalHeader}>
                                                <View style={styles.modalHeaderContent}></View>
                                                <TouchableOpacity onPress={() => setModal(false)}>
                                                    <Text style={styles.modalHeaderCloseText}>Close</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.modalContent}>
                                                <Text style={styles.text}>Your account:</Text>
                                                <Text style={styles.text}>Email: </Text>
                                                <Text style={styles.text}>Password: </Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                </Modal> */}

                                <TouchableOpacity>
                                    <View style={styles.card_template}>
                                        <Image
                                            style={styles.card_image}
                                            source={{ uri: item.image }}
                                        />
                                        <View style={styles.text_container}>
                                            <Text style={styles.card_title}>{item.title}</Text>
                                        </View>
                                        <View style={styles.description_container}>
                                            <Text style={styles.card_description}>{item.description}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        )
                    })
                }
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    card_template: {
        width: 300,
        height: 250,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        marginTop: 20
    },
    card_image: {
        width: 300,
        height: 250,
    },
    text_container: {
        position: "absolute",
        width: 280,
        height: 50,
        top: 0,
        padding: 5,
        backgroundColor: "rgba(0,0,0, 0.3)",
    },
    description_container:{
        position: "absolute",
        width: 280,
        height: 100,
        bottom: 0,
        padding: 5,
        backgroundColor: "rgba(0,0,0, 0.3)",
    },
    card_title: {
        color: "white",
        fontSize:15,
        fontWeight:'700'
    },
    card_description:{
        color: "#ccc",
        fontSize:12
    },
    scrollView: {
        marginHorizontal: 20,
    },
    modal: {
        flex: 1,
        margin: 0,
        position:"absolute",
        top:'10%',
        left:'5%',
        marginRight:'50%',
        padding: 5,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:420,
        height:500,
    },

    modalContent: {
        flex: 1,
    },
    modalHeader: {
        flexDirection: "row",
    },

    modalHeaderContent: {
        flexGrow: 1,
    },
    modalHeaderCloseText: {
        textAlign: "center",
        padding:5,
        color:'#fff',
        backgroundColor:'#ccc',
        borderRadius:5,
        margin:5
    },
    outsideModal: {
        backgroundColor: "rgba(1, 1, 1, 0.2)",
        flex: 1,
        width:"100%",
    },
    text:{
        color:"#000",
        fontSize:15
    }
});


export default Placetrip;
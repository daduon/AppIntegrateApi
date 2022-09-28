import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image,Button,TouchableOpacity,Alert } from "react-native";

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Text style={styles.text}>Welcome</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.signin}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: '50%',
    },
    background:{
        backgroundColor:"#00ced1",
        width:'100%',   
        height:'100%',
    },
    signin:{
        backgroundColor: '#3A59FF',
        color: 'white',
        width: "75%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '11%',
        padding: "2%",
        fontSize:  27,
        marginTop: '50%'
    }
});

export default Home;
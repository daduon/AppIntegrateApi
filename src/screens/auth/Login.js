import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import axios from "axios";

const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [validate, setValidate] = useState("")

    function signIn() {
        const validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(validate) && password.match(confirm)) {
            navigation.navigate('Product');
        } else {
            setValidate('email or password incorrect!');
        }

        // try{
        //     const users = axios.get("https://mocki.io/v1/196c9510-7e53-439e-9f0c-50c5362e9e6a")
        //                        .then((response) =>{
        //                         console.log(response.data);
        //                        }).catch((error) =>{
        //                         console.log(error);
        //                        })
        // }catch(error){
        //     console.log(error)
        // }
    }


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Login Form</Text>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                />
                
                {
                    validate.length > 0 &&
                    <Text style={styles.validation}>{validate}</Text>
                }
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                />
                <TextInput
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(confirm) => setConfirm(confirm)}
                />
                {
                    validate.length > 0 && 
                    <Text style={styles.validation}>{validate}</Text>
                }

                <TouchableOpacity onPress={signIn}>
                    <Text style={styles.signinBtn}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00FFFF',
    },
    title: {
        color: '#000',
        fontSize: 24,
        marginBottom: 15
    },
    input: {
        width: 250,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 10,
        color: "#000"
    },
    signinBtn: {
        backgroundColor: '#3A59FF',
        color: 'white',
        fontSize: 15,
        padding: 10,
        borderRadius: 10
    },
    validation:{
        color:'red',
        fontSize:12
    }
});


export default Login;
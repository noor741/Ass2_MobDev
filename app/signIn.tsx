import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import credentials from '../credentials.json';

export default function SignInScreen() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    function handleSignIn() {
        const usernameRegex = /.{5,}/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!usernameRegex.test(username)) {
            Alert.alert('Error', 'Username less than 5 characters');
        }
        if (!passwordRegex.test(password)) {
            Alert.alert('Error', 'Password should be 8 letters with atleast one capital letter, small letter, number and special character');
        }
        else {
            let loggedin = false;
            for (let user of credentials.users) {
                if (user.username === username && user.password === password) {
                    Alert.alert('Succes', 'Logged In Successfully');
                    loggedin = true;
                    break;
                }

            }
            if (!loggedin) {
                Alert.alert('Error', 'Invalid Credentials');
            }

        }

    }

    return (
        <View style={styles.container}>
            <Text>Sign In</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Sign In" onPress={() => handleSignIn()} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',

    },
    input: {
        height: 40,
        gap: 10,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
    },
});
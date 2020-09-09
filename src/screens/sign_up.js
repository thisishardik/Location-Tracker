import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/spacer';


const SignUpScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View style = {styles.container}>
            <Spacer>
                <Text h2>Sign Up</Text>
            </Spacer>
            <Input 
                autoCapitalize = "none"
                autoCorrect = {false} 
                label = "Email" 
                value = {email} 
                onChangeText = {(newEmail) => setEmail(newEmail)}/>
            <Spacer />
            <Input
                autoCapitalize = "none"
                secureTextEntry = {true}
                autoCorrect = {false} 
                label = "Password" 
                value = {password} 
                onChangeText = {(newPassword) => setPassword(newPassword)}/>
            <Spacer>
                <Button title = "Sign Up"/>
            </Spacer>
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        paddingTop: 50.0,
        marginBottom: 150.0,
    }
});


export default SignUpScreen;
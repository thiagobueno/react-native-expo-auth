import React, { useContext } from 'react';
import { View, Button } from 'react-native';

import AuthContext from '../../contexts/auth';

import styles from './styles';

export default function SignIn() {
  
    const { signed, signIn } = useContext(AuthContext);

    console.log(signed)

    function handleSignIn(){
        signIn();
    }

    return (
        <View style={styles.container}>
            <Button onPress={handleSignIn} title='Sign in' />
        </View>
    );
}

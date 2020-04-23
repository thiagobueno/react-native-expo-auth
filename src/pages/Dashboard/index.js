import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import AuthContext from '../../contexts/auth';

import styles from './styles';

export default function Dashboard() {
    
    const { signed, user, signOut } = useContext(AuthContext);

    function handleSignout(){
        signOut();
    }

    return (
        <View style={styles.container}>
            <Text>Olá {user.name}!</Text>
            <Button onPress={handleSignout} title='Sign out' />
        </View>
    );
}

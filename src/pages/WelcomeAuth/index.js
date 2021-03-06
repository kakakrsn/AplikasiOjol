import React from 'react';
import { View, Text, Image } from 'react-native';
import { welcomeAuth } from '../../Assets';
import { colors } from '../../utils';
import ActionButton from './ActionButton';


const WelcomeAuth = () => {
    return (
        <View style={styles.wrapper.page}>
            <Image source={welcomeAuth} style={styles.wrapper.illustration} />
            <Text style={styles.text.welcome}>Selamat Masuk di O-JOL</Text>
            <ActionButton desc="Silahkan masuk, jika anda sudah memiliki akun" title="Masuk" />
            <ActionButton desc="atau silahkan daftar, jika anda belum memiliki akun" title="Daftar" />
        </View>
    );
};

const styles = {
    wrapper: {
        page: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'white',
        },
        illustration: {
            width: 219, 
            height: 117, 
            marginBottom: 10,
        },
    },
    text: {
        welcome: { 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: colors.default, 
            marginBottom: 76, 
        }
    }
}

export default WelcomeAuth;
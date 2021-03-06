import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components';
import { colors } from '../../utils';

const ActionButton = ({desc, title}) => {
    return (
        <View style={styles.wrapper.component}>
            <Text style={styles.text.desc}>{desc}</Text>
            <Button title={title}/>
            

        </View>
    );
}

const styles = {
    wrapper: {
        component: { marginBottom: 43, maxWidth: 225, maxHeight: 40 }
    },
    text: {
        desc: { 
            fontSize: 10, 
            color: colors.text.default, 
            textAlign: 'center', 
            marginBottom: 6, 
            paddingHorizontal: '15%',
        },
    },
}

export default ActionButton;
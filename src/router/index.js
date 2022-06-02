import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Login, Register, WelcomeAuth } from '../pages';

const stack = createNativeStackNavigator();

const Router = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="Splash" component={Splash} />
            <stack.Screen name="Login" component={Login} />
            <stack.Screen name="Register" component={Register} />
            <stack.Screen name="WelcomeAuth" component={WelcomeAuth} />
        </stack.Navigator>
    );
}

export default Router;
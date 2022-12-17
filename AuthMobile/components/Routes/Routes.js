import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home/Home';
import SignUp from '../Signup/SignUp';
import SignIn from '../Signin/SignIn';

const Route = createStackNavigator();

const Routes = ({navigation}) =>{
    <NavigationContainer>
        <Route.Navigator initialRouteName='Home'>
             <Route.Screen name="Home" component={Home}/>
            <Route.Screen name="SignIn" component={SignIn}/>
            <Route.Screen name="SignUp" component={SignUp} />
        </Route.Navigator>
    </NavigationContainer>
}
export default Routes

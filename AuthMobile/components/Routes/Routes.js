import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/Home';
import SignUp from '../Signup/SignUp';
import SignIn from '../Signin/SignIn';

const Route = createStackNavigator();

const Routes = ({}) =>{
    <Route.Navigator>
        <Route.Navigator initialRouteName='Splash'>
            <Route.Screen name="Home" component={Home}/>
            <Route.Screen name="Home" component={SignIn}/>
            <Route.Screen name="Home" component={SignUp} />
        </Route.Navigator>
    </Route.Navigator>
}
export default Routes

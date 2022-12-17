import React from 'react';
import { createNativeRouteNavigator } from '@react-navigation/Route';
import Home from '../Home/Home';
import SignUp from '../Signup/SignUp';
import SignIn from '../Signin/SignIn';

const Route = createNativeRouteNavigator;

const Routes = ({}) =>{
    <NavigationContainer>
        <Route.Navigator initialRouteName='Splash'>
            <Route.Screen name="Home" component={Home}/>
            <Route.Screen name="Home" component={SignIn}/>
            <Route.Screen name="Home" component={SignUp} />
        </Route.Navigator>
    </NavigationContainer>
}
export default Routes

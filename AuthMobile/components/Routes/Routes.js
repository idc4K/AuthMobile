import React from 'react';
import { createNativeRouteNavigator } from '@react-navigation/Route';
import Home from '../Home/Home';

const Route = createNativeRouteNavigator;

const Routes = ({}) =>{
    <NavigationContainer>
        <Route.Navigator initialRouteName='Splash'>
            <Route.Screen name="Home" component={Home}/>
            <Route.Screen name="Home" component={Home} options={{header: () =>null}}/>
            <Route.Screen name="Home" component={Home} options={{header: () =>null}}/>
        </Route.Navigator>
    </NavigationContainer>
}
export default Routes

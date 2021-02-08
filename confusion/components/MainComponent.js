import React from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const MenuNavigatorStack = createStackNavigator();
const MenuNavigator = (props) => {
    
    return (
        <NavigationContainer>
            <MenuNavigatorStack.Navigator initialRouteName="Menu"
                screenOptions={{
                    headerStyle: {backgroundColor: '#512DA8'},
                    headerTintColor: '#fff',
                    headerTitleStyle: {color: '#fff'}
                    }}>
                <MenuNavigatorStack.Screen name="Menu" component={Menu} options={{title: "Menu"}}></MenuNavigatorStack.Screen>
                <MenuNavigatorStack.Screen name="Dishdetail" component={Dishdetail} options={{title: "Dish Details"}}></MenuNavigatorStack.Screen>
            </MenuNavigatorStack.Navigator>
        </NavigationContainer>
    );

};

const Main = (props) => {
    return (
        <MenuNavigator></MenuNavigator>
    );
};

export default Main;
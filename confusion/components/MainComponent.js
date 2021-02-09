import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeNavigatorStack = createStackNavigator();
const HomeNavigator = (props) => {
    return (
        <HomeNavigatorStack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: '#512DA8'},
                headerTintColor: '#fff',
                headerTitleStyle: {color: '#fff'}
                }}>
            <HomeNavigatorStack.Screen name="Home" component={Home} options={{title: "Home"}}></HomeNavigatorStack.Screen>
        </HomeNavigatorStack.Navigator>
    );
};

const MenuNavigatorStack = createStackNavigator();
const MenuNavigator = (props) => {
    return (
        <MenuNavigatorStack.Navigator initialRouteName="Menu"
            screenOptions={{
                headerStyle: {backgroundColor: '#512DA8'},
                headerTintColor: '#fff',
                headerTitleStyle: {color: '#fff'}
                }}>
            <MenuNavigatorStack.Screen name="Menu" component={Menu} options={{title: "Menu"}}></MenuNavigatorStack.Screen>
            <MenuNavigatorStack.Screen name="Dishdetail" component={Dishdetail} options={{title: "Dish Details"}}></MenuNavigatorStack.Screen>
        </MenuNavigatorStack.Navigator>
    );
};

const MainNavigatorDrawer = createDrawerNavigator();
const MainNavigator = (props) => {
    return (
        <NavigationContainer>
            <MainNavigatorDrawer.Navigator
                drawerStyle={{
                    backgroundColor:'#D1C4E9'}
                    }>
                <MainNavigatorDrawer.Screen name="Home" component={HomeNavigator} options={{title: "Home", drawerLabel: "Home"}}></MainNavigatorDrawer.Screen>
                <MainNavigatorDrawer.Screen name="Menu" component={MenuNavigator} options={{title: "Menu", drawerLabel: "Menu"}}></MainNavigatorDrawer.Screen>
            </MainNavigatorDrawer.Navigator>
        </NavigationContainer>
    );
};

const Main = (props) => {
    return (
        <MainNavigator />
    );
};

export default Main;
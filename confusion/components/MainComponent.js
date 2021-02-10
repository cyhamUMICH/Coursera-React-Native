import React from 'react';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Create Stack Navigators even if for one page in order to use the same header style throughout.
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

const ContactNavigatorStack = createStackNavigator();
const ContactNavigator = (props) => {
    return (
        <ContactNavigatorStack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: '#512DA8'},
                headerTintColor: '#fff',
                headerTitleStyle: {color: '#fff'}
                }}>
            <ContactNavigatorStack.Screen name="Contact Us" component={Contact} options={{title: ""}}></ContactNavigatorStack.Screen>
        </ContactNavigatorStack.Navigator>
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

const AboutNavigatorStack = createStackNavigator();
const AboutNavigator = (props) => {
    return (
        <AboutNavigatorStack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: '#512DA8'},
                headerTintColor: '#fff',
                headerTitleStyle: {color: '#fff'}
                }}>
            <AboutNavigatorStack.Screen name="About" component={About} options={{title: "About Us"}}></AboutNavigatorStack.Screen>
        </AboutNavigatorStack.Navigator>
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
                <MainNavigatorDrawer.Screen name="Contact Us" component={ContactNavigator} options={{title: "Contact Us",drawerLabel: "Contact Us"}}></MainNavigatorDrawer.Screen>
                <MainNavigatorDrawer.Screen name="Menu" component={MenuNavigator} options={{title: "Menu", drawerLabel: "Menu"}}></MainNavigatorDrawer.Screen>
                <MainNavigatorDrawer.Screen name="About Us" component={AboutNavigator} options={{title: "About Us", drawerLabel: "About Us"}}></MainNavigatorDrawer.Screen>
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
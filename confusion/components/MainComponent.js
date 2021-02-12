import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements';

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
            <HomeNavigatorStack.Screen name="Home" component={Home} 
                options={({ navigation }) => ({
                    title: "Home",
                    headerLeft: () => (<Icon name="menu" color="white"
                        onPress={() => navigation.toggleDrawer()}></Icon>)
                })}></HomeNavigatorStack.Screen>
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
            <ContactNavigatorStack.Screen name="Contact Us" component={Contact} 
                options={({ navigation }) => ({
                    title: "Contact Us",
                    headerLeft: () => (<Icon name="menu" color="white"
                        onPress={() => navigation.toggleDrawer()}></Icon>)
                })}></ContactNavigatorStack.Screen>
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
            <MenuNavigatorStack.Screen name="Menu" component={Menu} 
                options={({ navigation }) => ({
                    title: "Menu",
                    headerLeft: () => (<Icon name="menu" color="white"
                        onPress={() => navigation.toggleDrawer()}></Icon>)
                })}></MenuNavigatorStack.Screen>
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
            <AboutNavigatorStack.Screen name="About" component={About} 
            options={({ navigation }) => ({
                title: "About Us",
                headerLeft: () => (<Icon name="menu" color="white"
                    onPress={() => navigation.toggleDrawer()}></Icon>)
            })}></AboutNavigatorStack.Screen>
        </AboutNavigatorStack.Navigator>
    );
};

const CustomDrawerContentComponent = (props) => {
    return (
        <DrawerContentScrollView>
            <SafeAreaView style={styles.container}
                forceInset={{ top: 'always', horizontal: 'never'}}>
                    <View style={styles.drawerHeader}>
                        <View style={{flex: 1}}>
                            <Image source={require('./images/logo.png')}
                                style={styles.drawerImage}></Image>
                        </View>
                        <View style={{flex: 2}}>
                            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                        </View>
                    </View>
                    <DrawerItemList {...props}></DrawerItemList>
            </SafeAreaView>
        </DrawerContentScrollView>
    );
};

const MainNavigatorDrawer = createDrawerNavigator();
const MainNavigator = (props) => {
    return (
        <NavigationContainer>
            <MainNavigatorDrawer.Navigator
                drawerStyle={{
                    backgroundColor:'#D1C4E9'}
                    }
                drawerContent={(props) => <CustomDrawerContentComponent {...props}></CustomDrawerContentComponent>}>
                <MainNavigatorDrawer.Screen name="Home" component={HomeNavigator} 
                    options={{title: "Home", drawerLabel: "Home", 
                        drawerIcon: ({ tintColor }) => (
                            <Icon name="home" type="font-awesome" size={24} color={tintColor}></Icon>
                        )}}></MainNavigatorDrawer.Screen>
                <MainNavigatorDrawer.Screen name="About Us" component={AboutNavigator} 
                    options={{title: "About Us", drawerLabel: "About Us",
                        drawerIcon: ({ tintColor }) => (
                            <Icon name="info-circle" type="font-awesome" size={24} color={tintColor}></Icon>
                        )}}></MainNavigatorDrawer.Screen>
                <MainNavigatorDrawer.Screen name="Menu" component={MenuNavigator} 
                    options={{title: "Menu", drawerLabel: "Menu",
                        drawerIcon: ({ tintColor }) => (
                            <Icon name="list" type="font-awesome" size={24} color={tintColor}></Icon>
                        )}}></MainNavigatorDrawer.Screen>
                <MainNavigatorDrawer.Screen name="Contact Us" component={ContactNavigator} 
                    options={{title: "Contact Us", drawerLabel: "Contact Us",
                        drawerIcon: ({ tintColor }) => (
                                <Icon name="address-card" type="font-awesome" size={24} color={tintColor}></Icon>
                            )}}></MainNavigatorDrawer.Screen>
            </MainNavigatorDrawer.Navigator>
        </NavigationContainer>
    );
};

const Main = (props) => {
    return (
        <MainNavigator />
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});

export default Main;
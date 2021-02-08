import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

const Menu = (props) => {
    const [dishes, setDishes] = useState(DISHES);
    
    // Destructuring assignment to get props.navigation.navigate
    const { navigate } = props.navigation;

    const renderMenuItem = ({item, index}) => {

        return (
            <ListItem key={index} 
                onPress={() => navigate('Dishdetail', { dishId: item.id })}>
                <Avatar source={require('./images/uthappizza.png')}></Avatar>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
        <FlatList
            data={dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />
    );
};

export default Menu;
import React, { useState } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import { View } from 'react-native';

const Main = (props) => {
    const [dishes, setDishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState(null);

    const onDishSelect = (dishId) => {
        setSelectedDish(dishId);
    }

    return (
        <View>
            <Menu dishes={dishes}
                onPress={(dishId) => onDishSelect(dishId)}/>
            <Dishdetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]}></Dishdetail>
        </View>
    );
};

export default Main;
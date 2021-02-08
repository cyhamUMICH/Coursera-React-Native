import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

const RenderDish = (props) => {
    const dish = props.dish;

    if (dish != null) {
        return (
            <Card>
                <Card.FeaturedTitle style={{color: 'black'}}>{dish.name}</Card.FeaturedTitle>
                <Card.Image source={require('./images/uthappizza.png')}></Card.Image>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        );
    }
    else {
        return(<View></View>);
    }
};

const Dishdetail = (props) => {
    const [dishes, setDishes] = useState(DISHES);
    const dishId = props.route.params.dishId;

    return (
        // + before dishId converts the string into an integer
        <RenderDish dish={dishes[+dishId]}></RenderDish>
    );
};

export default Dishdetail;
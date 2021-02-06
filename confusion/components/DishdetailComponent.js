import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderDish = (props) => {
    const dish = props.dish;

    if (dish != null) {
        return(
            <Card>
                <Card.FeaturedTitle style={{color: 'black'}}>{dish.name}</Card.FeaturedTitle>
                <Card.Image source={require('./images/uthappizza.png')}></Card.Image>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        );
    }
    else{
        return(<View></View>);
    }
}

const Dishdetail = (props) => {
    return(
        <RenderDish dish={props.dish}></RenderDish>
    );
}

export default Dishdetail;
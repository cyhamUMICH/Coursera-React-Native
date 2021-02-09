import React, {useState} from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

const RenderItem = (props) => {
    const item = props.item;

    if (item != null) {
        return (
            // Subtitle will only work for leaders where designation is not null
            <Card>
                <Card.FeaturedTitle style={{color: 'black'}}>{item.name}</Card.FeaturedTitle>
                <Card.FeaturedSubtitle style={{color: 'black'}}>{item.designation}</Card.FeaturedSubtitle>
                <Card.Image source={require('./images/uthappizza.png')}></Card.Image>
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    else {
        return(<View></View>);
    }
};


const Home = (props) => {
    const [dishes, setDishes] = useState(DISHES);
    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [leaders, setLeaders] = useState(LEADERS);
    
    return (
        // Filter for the ones where featured is true
        <ScrollView>
            <RenderItem item={dishes.filter((dish) => dish.featured)[0]}></RenderItem>
            <RenderItem item={promotions.filter((promo) => promo.featured)[0]}></RenderItem>
            <RenderItem item={leaders.filter((leader) => leader.featured)[0]}></RenderItem>
        </ScrollView>
    );  
};

export default Home;
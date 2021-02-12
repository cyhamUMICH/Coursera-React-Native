import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';

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
                <Icon raised reverse name={ props.favorite ? 'heart' : 'heart-o'} type='font-awesome' color='#f50' 
                    onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}>
                </Icon>
            </Card>
        );
    }
    else {
        return(<View></View>);
    }
};

const RenderComments = (props) => {
    const comments = props.comments;

    const renderCommentItem = ({item, index}) => {
        return (
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>--{item.author}, {item.date}</Text>
            </View>
        );
    };

    return (
        <Card containerStyle={{flex: 1, paddingBottom: 50}}>
            <Card.Title>Comments</Card.Title>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}>
            </FlatList>
        </Card>
    );
};

const Dishdetail = (props) => {
    const [dishes, setDishes] = useState(DISHES);
    const [comments, setComments] = useState(COMMENTS);
    const [favorites, setFavorites] = useState([]);
    const dishId = props.route.params.dishId;

    const markFavorite = (dishId) => {
        // Concatenate the dishId into the favorites array
        setFavorites(arr => [...arr, dishId]);
    };

    return (
        <View style={{flex: 1}}>
            {/* + before dishId converts the string into an integer */}
            <RenderDish dish={dishes[+dishId]} 
                favorite={favorites.some((element) => element === dishId)}
                onPress={() => markFavorite(dishId)}></RenderDish>
            <RenderComments comments={comments.filter((comment) => comment.dishId === dishId)}></RenderComments>
        </View>

    );
};

export default Dishdetail;
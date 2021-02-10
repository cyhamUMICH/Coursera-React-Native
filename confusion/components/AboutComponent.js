import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';

const History = (props) => {
    return (
        <View>
            <Card>
                <Card.FeaturedTitle style={{color: 'black', textAlign: 'center'}}>Our History</Card.FeaturedTitle>
                <Card.Divider></Card.Divider>
                <Card.FeaturedSubtitle style={{color: 'black', margin: 10}}>
                    Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par
                    excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, 
                    it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star 
                    Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
                </Card.FeaturedSubtitle>
                <Card.FeaturedSubtitle style={{color: 'black', margin: 10}}>
                    The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, 
                    Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                </Card.FeaturedSubtitle>
            </Card>
        </View>
    );
};

const About = (props) => {
    const [leaders, setLeaders] = useState(LEADERS);

    const renderLeader = ({item, index}) => {

        return (
            <ListItem key={index}>
                <Avatar source={require('./images/alberto.png')}></Avatar>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <View style={{flex: 1}}>
            <History></History>
            <Card containerStyle={{flex: 1, paddingBottom: 50}}>
                <Card.FeaturedTitle style={{color: 'black', textAlign: 'center'}}>Corporate Leadership</Card.FeaturedTitle>
                <Card.Divider></Card.Divider>
                <FlatList containerStyle={{flex: 1}}
                    data={leaders}
                    renderItem={renderLeader}
                    keyExtractor={item => item.id.toString()}
                />
            </Card>
        </View>
    );
};

export default About;
import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-elements';

const Contact = (props) => {
    return (
        <View>
            <Card>
                <Card.FeaturedTitle style={{color: 'black', textAlign: 'center'}}>Contact Information</Card.FeaturedTitle>
                <Card.Divider></Card.Divider>
                <Card.FeaturedSubtitle style={{color: 'black', margin: 10}}>{(
                    `121, Clear Water Bay Road\n
                    Clear Water Bay, Kowloon\n
                    HONG KONG\n
                    Tel: +852 1234 5678\n
                    Fax: +852 8765 4321\n
                    Email:confusion@food.net`
                    )
                   .replace(/    +/g, '')}
                </Card.FeaturedSubtitle>
            </Card>
        </View>
    );
};

export default Contact;
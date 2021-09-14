import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'; //LO NUEVO

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
// import Detail from './Detail';
export default function CharacterCard({ id, image, name }) {

    const navigation = useNavigation();

    return (
        <Card
            style={{ backgroundColor: '#0000009a', marginLeft:'15%',width: '75%', margin: '4%' }}
        >
            <Card.Content>
                <Card.Cover source={image} style={{ borderRadius: '3%' }} />
                <Card.Actions style={{ display: 'flex', flexDirection: 'column' }}>
                    <Card.Title title={name} style={{ color: 'white' }} titleStyle={{ color: 'white' }} />
                    <Button mode='contained' style={{ marginRight: '-75%' }} onPress={() => navigation.navigate('Detail', id)}>More</Button>
                </Card.Actions>
            </Card.Content>
        </Card>
        // <TouchableOpacity
        //  style={styles.cardContainer}
        //  onPress={() => navigation.navigate('Detail', id)}
        //  >
        //     <Image
        //         style={styles.img}
        //         source={image}
        //     />
        //     <Text style={styles.cardText}>{name}</Text>
        // </TouchableOpacity>
    );
}
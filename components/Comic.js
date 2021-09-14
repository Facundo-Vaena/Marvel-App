import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
import styles from '../styles';

export default function Comic({ name, image }) {

    return (
        <View
            style={styles.comicContainer}
        >
            <View
            style={styles.comicImgContainer}
            >
                <Image
                    style={styles.comicImg}
                    source={{ uri: image }}
                />
            </View>
            <View style={styles.comicText}>
            <Text
            style={{color:'white'}}
            >{name}</Text>
            </View>
        </View>
    )
}
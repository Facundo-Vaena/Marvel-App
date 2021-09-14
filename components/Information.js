import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles';

export default function Information({ image, name, description }) {
    return (
        <View
            style={styles.info}
        >
            <View style={styles.infoImgContainer}>
                <Image
                    source={{ uri: image }}
                    style={styles.infoImg}
                />
            </View>
            <View style={styles.textDescription}>
                <Text style={styles.infoText}>{name}</Text>
                <Text style={styles.infoText}>{description ? description : 'No description yet' }</Text>
            </View>
        </View>)
}
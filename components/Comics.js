import * as React from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import Comic from './Comic';
import { useEffect, useState } from 'react';
import apiParams from '../config';
import axios from 'axios';
import styles from '../styles';

export default function Comics({ listComics }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { ts, apikey, hash, baseURL } = apiParams;

    useEffect(() => {
        const promisesArray = listComics.map(c => (
            axios.get(c.resourceURI, {
                params: {
                    ts,
                    apikey,
                    hash
                }
            })
        ));

        Promise.all(promisesArray)
            .then(responses => setData(responses.map(r => (
                r?.data?.data?.results[0]
            ))))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));

    }, []);
//color="#00ff00"
    return (
        <View 
        style={styles.comics}
        >
            {
                isLoading
                    ? <ActivityIndicator size="large" color="#00ff00" style={styles.spinner} />
                    : <FlatList
                    contentContainerStyle={{alignItems:'center'}}
                    data={data}
                    keyExtractor={({id}) => id.toString()}
                    horizontal
                    pagingEnabled
                    renderItem={({item}) => (
                        <Comic
                                key={item.id}
                                name={item.title}
                                image={`${item?.thumbnail?.path}.${item.thumbnail.extension}`}
                            />
                    )}
                    
                    >

                    </FlatList>
            }
        </View>
    )
}
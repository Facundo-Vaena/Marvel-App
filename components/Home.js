import * as React from 'react';
import { ActivityIndicator, FlatList, View, Text, ImageBackground, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import apiParams from '../config.js';
import axios from 'axios';
import { Searchbar, Button } from 'react-native-paper';
import styles from '../styles';
// require('dotenv').config()

export default function Home() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [reload, setReload] = useState(true);
    const [flag, setFlag] = useState(false);
    const { ts, apikey, hash, baseURL } = apiParams;
    const { height } = useWindowDimensions();
    
    useEffect(() => {
        // console.log(height);
        axios.get(`${baseURL}/v1/public/characters`, {
            params: {
                ts,
                apikey,
                hash
            }
        })
            .then(response => {
                setData(response.data.data.results)})
            .then(() => setFlag(false))    
            .catch(error => console.error('ERROR', error))
            .finally(() => setLoading(false));
    }, [reload]);

    const searchCharacter = () => {
        if (search) {
            setLoading(true);
            setFlag(true);
            setSearch('');
            axios.get(`${baseURL}/v1/public/characters`, {
                params: {
                    ts,
                    apikey,
                    hash,
                    nameStartsWith: search
                }
            })
                .then((res) => {
                    setData(res.data.data.results)
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }
    }

    return (
        <ImageBackground
        source='https://cdn.wallpapersafari.com/59/58/Bc63Mg.png'
        style={{height}}
        // style={styles.home}
        >
            {isLoading
                ? <ActivityIndicator size="large" color="#00ff00" style={styles.spinner} />
                : (<>
                    <Searchbar
                        // placeholder="Search for character..."
                        // inputStyle={{backgroundColor:'grey'}}
                        // iconColor='red'
                        onChangeText={value => setSearch(value)}
                        value={search}
                        onIconPress={searchCharacter}
                        onSubmitEditing={searchCharacter}
                    />
                    {   flag ? 
                        <Button 
                    mode='contained'
                    onPress={() => setReload(!reload)}
                    >
                        Reload
                    </Button>
                    :
                    null
                    }
                    { data.length 
                    ? <FlatList
                        data={data}
                        keyExtractor={({ id }) => id.toString()}
                        renderItem={({ item }) => (
                            <CharacterCard
                                id={item.id}
                                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                                name={item.name} />
                        )}
                    />
                    : <Text style={styles.noDescription}>No results</Text>
                        }
                </>
                )
            }
        </ImageBackground>
    );
}
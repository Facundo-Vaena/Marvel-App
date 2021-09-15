import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import Information from './Information';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Comics from './Comics';
import apiParams from '../config';
import styles from '../styles';

const Tab = createBottomTabNavigator();

export default function Detail({ route }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { ts, apikey, hash, baseURL } = apiParams;

    useEffect(() => {
        axios.get(`${baseURL}/v1/public/characters/${route.params}`, {
            params: {
                ts,
                apikey,
                hash
            }

        })
            .then(response => setData(response.data.data.results[0]))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
        // console.log(route)
    }, [])

    return (   
        <Tab.Navigator
            initialRouteName='Information'
            tabBarOptions={{
                activeTintColor: 'darkred'
            }}
        >

            <Tab.Screen
                name='Information'

                // component={Information}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='information-circle' color={color} size={size}
                        />
                    )
                }}>
                {() =>
                (isLoading
                    ? <ActivityIndicator size="large" color="#00ff00" style={styles.spinner} />
                    : <Information
                        image={`${data?.thumbnail?.path}.${data.thumbnail.extension}`}
                        name={data.name}
                        description={data.description}
                    />
                )
                }
            </Tab.Screen>

            <Tab.Screen
                name='Comics'
                // component={Comics}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='book' color={color} size={size}
                        />
                    )
                }} >
                {() =>

                (isLoading
                    ? <ActivityIndicator size="large" color="#00ff00" />
                    : <Comics listComics={data?.comics?.items} />
                )

                }


            </Tab.Screen>





        </Tab.Navigator>
    )
}
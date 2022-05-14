import React, { useState } from 'react'
import { View, TextInput, FlatList, Text } from 'react-native'
import styles from './styles'
import locations from '../../../assets/data/search'

const Location = ({location}) => (
    <View style={styles.locationRow}>
        <View style={styles.iconContainer}>
            <Text>🌎</Text>
        </View>
        <Text style={styles.locationText}>{location.description}</Text>
    </View>
);

const SearchScreen = () => {
    const [ searchText, setSearchText] = useState("");


    return(
        <View style={styles.container}>
            {/* input component */}
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                value={searchText}
                onChangeText={setSearchText}
            />

            {/* list of destinations */}
            <FlatList
                data={locations}
                renderItem={({item}) => <Location location={item} />}
            />
        </View>
    )
}

export default SearchScreen;
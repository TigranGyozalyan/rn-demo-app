import React, {useState} from 'react';
import {Button, TextInput, View} from "react-native";


const SearchBar = (props) => {
    const [query, updateQuery] = useState("");
    const { onSearch } = props;

    const onChangeText = (newVal) => {
        updateQuery(newVal);
    };

    const onPress = () => {
        onSearch(query);
    }

    return (
        <View>
            <TextInput value={query} onChangeText={onChangeText} />
            <Button title={"Search"} onPress={onPress} />
        </View>
    );
}

export default SearchBar;
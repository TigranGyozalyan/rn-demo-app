/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import SearchBar from "./SearchBar";
import ResultItem from "./ResultItem";

const App = () => {
    const [data, updateData] = useState([]);
    const ACCESS_TOKEN = 'AIzaSyDgz_e9XrbacAZrj4he5xuTnpEXuDc-O9U';

    const onSearch = (query) => {
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${ACCESS_TOKEN}`;
            fetch(url)
                .then(res => res.json())
                .then((res) => {
                    const mappedData = res.items.map(el => {
                       const { title, thumbnails } = el.snippet;
                        return {
                           title,
                           thumbnail: thumbnails.default.url
                       }
                    });
                    updateData(mappedData);
                });
    }
    return (
        <View>
            <SearchBar onSearch={onSearch} />
            <FlatList
                data={data}
                renderItem={({ item }) => (<ResultItem title={item.title} thumbnail={item.thumbnail} />)}
                keyExtractor={(i) => i.title}
            />
        </View>
    );
};

export default App;

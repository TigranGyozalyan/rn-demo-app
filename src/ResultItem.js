import React from 'react';
import {Image, Text, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        height: 50,
        width: 50
    }
})

const ResultItem = props => {
    const {thumbnail, title} = props;
    return (
        <View style={styles.container}>
            <Image source={{uri: thumbnail}} style={styles.image} />
            <Text>{title}</Text>
        </View>
    );
};

export default ResultItem;
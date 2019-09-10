import React, { Component } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import styles from './styles';

class StoriesList extends Component {


    renderItem = ( { item } ) => {
        return (
            <View style={styles.listContainer}>
                <Image source={{ uri: item.images[0] }} style={{ width: 70, height: 75 }}/>
                <Text>{item.title}</Text>
            </View>
        )
    };

    render() {
        const { data = [] } = this.props;
        return (
            <FlatList
                data={data}
                renderItem={this.renderItem}
            />
        )
    }
}

export default StoriesList;

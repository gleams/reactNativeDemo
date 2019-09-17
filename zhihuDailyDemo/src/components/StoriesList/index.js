import React, { Component } from 'react';
import { FlatList, Text, View, Image, SafeAreaView } from 'react-native';
import styles from './styles';

class StoriesList extends Component {


    renderItem = ( { item } ) => {
        return (
            <View style={styles.listContainer}>
                <Image source={{ uri: item.images[0] }} style={{ width: 70, height: 75 }}/>
                <View style={styles.liBox}>
                    <Text style={styles.textBox}>{item.title}</Text>
                </View>
            </View>
        )
    };

    render() {
        const { data = [] } = this.props;
        return (
            <FlatList
                style={{ backgroundColor: '#f2f9fb' }}
                data={data}
                renderItem={this.renderItem}
            />
        )
    }
}

export default StoriesList;

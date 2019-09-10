import React from 'react';
import { View, Text, Button } from 'react-native';

export default class extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', }}>
                <Text>
                    Home
                </Text>
                <Button
                    title={'openDrawer'}
                    onPress={() => {
                        this.props.navigation.openDrawer();
                    }}
                />
                <Button
                    title={'detail'}
                    onPress={() => {
                        this.props.navigation.navigate('DetailScreen')
                    }}
                />
            </View>
        )
    }
}

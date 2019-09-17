import React from 'react';
import { Button, Icon } from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import { Api, Axios } from '../../utils';
import StoriesList from '../../components/StoriesList';

export default class extends React.Component {
    static navigationOptions = ( { navigation } ) => ({
            title: '首页',
            headerLeft: <Button type={'clear'} onPress={navigation.openDrawer} icon={<Icon name={'home'} color={'#458fee'} />}/>
        }
    );

    state = {
        stories: []
    };

    componentDidMount() {
        Axios.get(Api.latest).then(( { data: { stories } } ) => {
            this.setState({
                stories
            })
        })
    }

    render() {
        return (
            <StoriesList
                data={this.state.stories}
            >

            </StoriesList>
        )
    }
}

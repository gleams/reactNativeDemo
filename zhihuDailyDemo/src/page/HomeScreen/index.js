import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { ScrollView, ActivityIndicator } from 'react-native';
import { Api, Axios } from '../../utils';
import StoriesList from '../../components/StoriesList';
import Swiper from './HomeSwiper';

export default class extends React.Component {
    static navigationOptions = ( { navigation } ) => ({
            title: '首页',
            headerLeft: <Button type={'clear'} onPress={navigation.openDrawer}
                                icon={<Icon name={'home'} color={'#458fee'}/>}/>
        }
    );

    state = {
        stories: [],
        top_stories: [],
        date: '',
        isLoading:false
    };

    componentDidMount() {

        Axios.get(Api.latest).then(( { data } ) => {
            const { stories, top_stories, date } = data;
            this.setState({
                stories,
                date,
                top_stories
            })
        })
    }

    handleViewScroll = ( e ) => {
        const offsetY = e.nativeEvent.contentSize.height;
        const contentSizeHeight = e.nativeEvent.contentSize.height;
        const oriageScrollHeight = e.nativeEvent.layoutMeasurement.height;
        if ( offsetY + oriageScrollHeight >= contentSizeHeight - 60 ) {
            this.pullUpFresh();
        }
    };
    pullUpFresh = () => {
        this.setState({
            isLoading:true
        })
        Axios
            .get(Api.before + this.state.date)
            .then(( { data } ) => {
                const { stories, date } = data;
                this.setState({
                    stories: this.state.stories.concat(stories),
                    date,
                    isLoading:false
                })
            })
            .catch(()=>{
                this.setState({
                    isLoading:false
                })
            })
        ;
    };

    render() {
        return (
            <ScrollView
                onMomentumScrollEnd={this.handleViewScroll}
            >
                <Swiper
                    data={this.state.top_stories}
                    onPress={() => {

                    }}
                />
                <StoriesList
                    data={this.state.stories}
                >

                </StoriesList>
                {this.state.isLoading
                    ?
                    <ActivityIndicator/>
                    :null

                }
            </ScrollView>
        )
    }
}

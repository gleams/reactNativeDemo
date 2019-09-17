import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Carousel, {
    Pagination
} from 'react-native-snap-carousel';

class HomeSwiper extends Component {
    constructor( props ) {
        super(props)
        this.state = {
            activeSlide: 0
        }
    }
    get pagination(){
        return(
            <Pagination
                dotsLength={this.props.data.length}
                activeDotIndex={}

            />
        )
    }
}

export default HomeSwiper;

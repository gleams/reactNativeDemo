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
import { System } from "../../utils";

class HomeSwiper extends Component {
    constructor( props ) {
        super(props);
        this.state = {
            activeSlide: 0
        }
    }

    get pagination() {
        return (
            <Pagination
                dotsLength={this.props.data.length}
                activeDotIndex={this.state.activeSlide}
                containerStyle={{
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    bottom: -18,
                    left: 0,
                    right: 0
                }}
                dotContainerStyle={{
                    width: 15,
                    marginHorizontal: 0,
                }}
                dotColor={'#f00'}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.85}

            />
        )
    }

    renderItem = ( { item, index } ) => {
        return (
            <ImageBackground source={{ uri: item.image }} style={styles.sliderWrapper} key={item.id}
            >
                <TouchableOpacity
                    style={styles.mask}
                    activeOpacity={1}
                    onPress={this.props.onPress.bind(this, item, index, this.props.data)}
                >
                    <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
            </ImageBackground>

        )
    }

    render() {

        return (
            <View style={styles.wrapper}>
                <Carousel
                    autoplay
                    loop
                    layout={''}
                    autoplayDelay={3500}
                    data={this.props.data}
                    renderItem={this.renderItem.bind(this)}
                    sliderWidth={System.SCREEN_WIDTH}
                    itemWidth={System.SCREEN_WIDTH}
                    onSnapToItem={index => this.setState({ activeSlide: index })}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                />
                {this.pagination}
            </View>
        )
    }
}

export default HomeSwiper;

const styles = StyleSheet.create({
    wrapper: {
        height: 230,
        position: 'relative'
    },
    sliderWrapper: {
        height: 230
    },
    linearGradient: {
        width: "100%",
        height: 230,
    },
    title: {
        fontSize: 22,
        fontWeight: "400",
        paddingBottom: 30,
        marginHorizontal: 20,
        color: "#fff"
    },
    mask: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    }
});

import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    SectionList,
    View
} from 'react-native';
import CardView from 'react-native-cardview';
import { observer, inject } from "mobx-react";
import { ListItem, Image, Icon } from "react-native-elements";

@inject('theme')
@observer
export default class Index extends Component{
    keyExtractor = (item,index)=>item.id.toString();
    renderHeader=info=>{
        return(<Text style={styles.headerTitle}>{info.section.key}</Text>)
    }
    renderItem=({item,index,section})=>{
        return (
            <CardView
                cardElevation={1}
                cornerRadius={5}
                key={item.id}
                style={styles.cardWrapper}
            >
                <ListItem
                    onPress={this.props.onPress.bind(this, item, index, section)}
                    containerStyle={{backgroundColor:this.props.theme.colors.itemBackground}}
                    title={item.title}
                    subtitle={item.display_date ? item.display_date : null}
                    subtitleStyle={{color:this.props.theme.colors.text}}
                    titleStyle={[
                        styles.itemTitle,
                        { color: item.visited ? this.props.theme.colors.visitedItem : this.props.theme.colors.item}
                    ]}
                    stickySectionHeadersEnabled={true}
                    titleContainerStyle={styles.titleContainer}
                    rightElement={
                        item.images ? (
                            <View style={{ position: "relative" }}>
                                {/* 判断是否增加多图标识 */}
                                {item.multipic ? (
                                    <View style={styles.multipicWrapper}>
                                        <Icon
                                            name="filter-none"
                                            type="material"
                                            color="#fff"
                                            size={14}
                                        />
                                        <Text style={styles.multipicText}>多图</Text>
                                    </View>
                                ) : null}
                                <Image
                                    source={{ uri: item.images[0]?item.images[0]:null }}
                                    style={{ width: 75, height: 70 }}
                                />
                            </View>
                        ) : null
                    }
                />
            </CardView>
        )
    }

    render() {
        return (
            <SectionList
                keyExtractor={this.keyExtractor}
                sections={this.props.data}
                renderSectionHeader={
                    this.props.sectionHeader ? this.props.sectionHeader : null
                }
                renderItem={this.renderItem}
                style={{backgroundColor:this.props.theme.colors.listBackground}}
            />
        );
    }
};

const styles = StyleSheet.create({
    cardWrapper: {
        marginVertical: 5, //垂直边距
        marginHorizontal: 10, //水平边距
    },
    itemTitle: {
        flex: 1,
        fontSize: 18
    },
    multipicWrapper: {
        bottom: 0,
        right: 0,
        padding: 3,
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1,
        flexDirection: "row",
        alignItems: "flex-start"
    },
    multipicText: {
        color: "#fff",
        fontSize: 10,
        marginLeft: 2
    }
});

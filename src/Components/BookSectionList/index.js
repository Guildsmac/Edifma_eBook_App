import React, {Component} from 'react'
import {ActivityIndicator, RefreshControl, ScrollView, SectionList, View} from 'react-native'
import ListItem from "../ListItem";
import ItemHeader from "../ItemHeader";
import {connect} from "react-redux";
import {PRIMARY_DARK} from "../../Consts/Colors";
import {fetchEbooks, refreshEbooks} from "../../Actions/mainActions";

class BookSelectionList extends Component {
    constructor(props) {
        super(props);
        this.list = null;
    }

    _onRefresh = () => {
        this.props.refreshEbooks();
        this.props.fetchEbooks(this.props.idusuario);
    };

    _getOrderedList(data) {
        let alphabet = '#abcdefghijklmnopqrstuvwxyz';
        let r = [];
        for (let i in alphabet) {
            let temp = this._getDataFromInitial(data, alphabet[i]);
            if (temp.length != 0)
                r[alphabet[i]] = temp;

        }
        let orderedList = [];
        for (let i in r)
            orderedList.push({title: i.toUpperCase(), data: [...r[i]]});

        return orderedList;
    }



    _getDataFromInitial(data, letter) {
        let r = [];
        for (let i in data) {
            if (letter === '#' && !data[i].titulo[0].toLowerCase().match(/[a-z]/i))
                r.push(data[i]);
            else {
                if (data[i].titulo[0].toLowerCase() === letter)
                    r.push(data[i]);
            }
        }
        return r;
    }

    _mountList() {
        let _data = this.props.data;
        this.list = (
            <ScrollView
                style={{flex: 1}}
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.isRefreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                <SectionList
                    renderItem={({item}) =>
                        <ListItem
                            image={{uri: item.icon_img_path}}
                            id={item.ide_book}
                            title={item.titulo}
                            author={item.autor}
                            description={item.descricao}
                            isAvailable={item.isAvailable}
                        />
                    }
                    renderSectionHeader={({section: {title}}) => (
                        <ItemHeader initial={title}/>
                    )}
                    sections={this._getOrderedList(_data)}
                    keyExtractor={(item, index) => item + index}
                />
            </ScrollView>);
    }

    /*componentWillMount() {
        this._mountList();
    }

    componentDidUpdate() {
        this._mountList();
    }*/

    _getStatus = () => {
        if (this.props.isActivityIndicatorOn) {
            return (
                <View style={{flex: 1}}>
                    <View style={{
                        backgroundColor: 'gray',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.7,
                        flex: 1,
                        position: 'absolute',
                        zIndex: 1000,
                        width: '100%',
                        height: '100%'
                    }}>
                        <ActivityIndicator size='large' color={PRIMARY_DARK}/>
                    </View>
                    {this.list}
                </View>
            )
        } else {
            return (
                this.list
            )
        }
    };

    render() {
        this._mountList();
        return (
            this._getStatus()
        )
    }
}

const mapStateToProps = (state) => ({
    isActivityIndicatorOn: state.mainReducers.isActivityIndicatorOn,
    isRefreshing: state.mainReducers.isRefreshing,
    idusuario: state.authReducers.idusuario
});

export default connect(mapStateToProps, {refreshEbooks, fetchEbooks})(BookSelectionList)
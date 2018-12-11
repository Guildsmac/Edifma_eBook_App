import React, {Component} from 'react'
import {ScrollView, SectionList, View, ActivityIndicator} from 'react-native'
import ListItem from "../ListItem";
import ItemHeader from "../ItemHeader";
import {connect} from "react-redux";
import {PRIMARY_DARK} from "../../Consts/Colors";
import {changeScrollPosition} from "../../Actions/mainActions";

class BookSelectionList extends Component{
    constructor(props){
        super(props);
        this.list = null;
    }

    _getOrderedList(data){
        let alphabet='#abcdefghijklmnopqrstuvwxyz';
        let r = [];
        for(let i in alphabet){
            let temp = this._getDataFromInitial(data, alphabet[i]);
            if(temp.length!=0)
                r[alphabet[i]] = temp;

        }
        let orderedList = [];
        for(let i in r)
            orderedList.push({title: i.toUpperCase(), data: [...r[i]]});

        return orderedList;
    }

    _getDataFromInitial(data, letter){
        let r = [];
        for(let i in data){
            if(letter==='#' && !data[i].titulo[0].toLowerCase().match(/[a-z]/i))
                r.push(data[i]);
            else {
                if (data[i].titulo[0].toLowerCase() === letter)
                    r.push(data[i]);
            }
        }
        return r;
    }

    componentWillMount(){
        let _data = this.props.data;
        this.list = (<ScrollView style={{flex:1}}>
            <SectionList
                renderItem={({item}) =>
                    <ListItem
                        image = {{uri: item.icon_img_path}}
                        id = {item.ide_book}
                        title = {item.titulo}
                        author = {item.autor}
                        description = {item.descricao}
                    />
                }
                renderSectionHeader={({section: {title}}) => (
                    <ItemHeader initial = {title}/>
                )}
                sections={this._getOrderedList(_data)}
                keyExtractor={(item, index) => item+index}
            />
        </ScrollView>);
    }

    _getStatus = () => {


        if(this.props.isActivityIndicatorOn){
            return (
                <View style={{flex:1}}>
                    <View style={{backgroundColor: 'gray',alignItems:'center',justifyContent: 'center', opacity: 0.7, flex: 1, position: 'absolute', zIndex: 1000, width:'100%', height:'100%'}}>
                        <ActivityIndicator size='large' color={PRIMARY_DARK}/>
                    </View>
                    {this.list}
                </View>
            )
        }else{
            return(
                this.list
            )
        }
    };

    render() {
        return(
            this._getStatus()
        )


    }
}

const mapStateToProps = (state) => ({
    isActivityIndicatorOn: state.mainReducers.isActivityIndicatorOn
});

export default connect(mapStateToProps, {changeScrollPosition})(BookSelectionList)
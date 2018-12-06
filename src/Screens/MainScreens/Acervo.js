import React, {Component} from 'react'
import {BackHandler, ScrollView, ActivityIndicator, View, Text} from 'react-native'
import ListItem from '../../Components/ListItem'
import ItemHeader from '../../Components/ItemHeader'
import {Actions} from "react-native-router-flux";
import {fetchEbooks} from '../../Actions/mainActions';
import {connect} from 'react-redux';
import {PRIMARY_DARK} from "../../Consts/Colors";
import BookSelectionList from "../../Components/BookSectionList";

class Acervo extends Component{

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    };

    componentWillMount(){
        this.props.fetchEbooks();
    }

    handleBackPress = () => {
        Actions.pop();
        return true;
    };

    getScreenState = () => {
        if(this.props.data.length === 0 || !this.props.data){
            return(
                <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
                    <ActivityIndicator size='large' color={PRIMARY_DARK}/>
                </View>
            )
        }
        else
            return(<BookSelectionList data = {this.props.data}/>);
    };

    render() {
        return(
            this.getScreenState()
         )
    }
}

const mapStateToProps = (state) => {
    return{
        data: state.mainReducers.data
    }
}

export default connect(mapStateToProps, {fetchEbooks})(Acervo)
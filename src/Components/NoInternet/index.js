import React, {Component} from 'react'
import {View, Image, Text, NetInfo} from 'react-native'
import {PRIMARY_FONT, PRIMARY_FONT_BLACK} from "../../Consts/Fonts";
import {PRIMARY_NORMAL_FONT_COLOR} from "../../Consts/Colors";
import {connect} from 'react-redux';
import {handleConnectivityChange} from "../../Actions/authActions";


class NoInternet extends Component{

    getConnection = () => {

        if(this.isConnected)
            return (<NoInternet isConnected={true}/>);
        else
            return (<NoInternet isConnected={false}/>);
    };

    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', (isConnected) => {this.props.handleConnectivityChange(isConnected)});
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', (isConnected) => {this.props.handleConnectivityChange(isConnected)});
    }


    getStatus = () => {
        if(!this.props.isConnectedToInternet){
            return (<View style={{backgroundColor: 'gray',alignItems:'center',justifyContent: 'space-evenly', opacity: 0.7, flex: 1, position: 'absolute', zIndex: 1000, width:'100%', height:'100%'}}>
                <Image source={require('../../Images/no-wifi.png')}/>
                <View>
                    <Text style={{textAlign: 'center', fontFamily: PRIMARY_FONT, fontSize:18, color: PRIMARY_NORMAL_FONT_COLOR}}>
                        Não há conexão com a internet.
                    </Text>
                    <Text style={{textAlign: 'center', fontFamily: PRIMARY_FONT, fontSize:18, color: PRIMARY_NORMAL_FONT_COLOR}}>
                        Por favor, verifique sua conexão e tente usar o aplicativo novamente.
                    </Text>
                </View>

            </View>);

            }
        else {
            return (<View></View>);

        }
    };

    render() {
        return(
            this.getStatus()
         )
    }

}

const mapStateToProps = state => {
    if(state.authReducers.INITIAL_STATE)
        return {isConnectedToInternet: state.authReducers.INITIAL_STATE.isConnectedToInternet};
    return {isConnectedToInternet: state.authReducers.isConnectedToInternet};
};

export default connect(mapStateToProps, {handleConnectivityChange})(NoInternet)
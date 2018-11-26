import React, {Component} from 'react'
import {BackHandler, View} from 'react-native'
import ListItem from '../../Components/ListItem'
import ItemHeader from '../../Components/ItemHeader'
import {Actions} from "react-native-router-flux";
class Acervo extends Component{

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    };

    handleBackPress = () => {

        Actions.pop();
        return true;
    };

    render() {
        return(
            <View>
                <ItemHeader initial='P'/>
                <ListItem
                    title="O Príncipe"
                    author="Nicolau Maquiavel"
                    description="Lorem ipsum dolor sit amet"
                    image={require("../../Images/standard-book.png")}
                />
            </View>
         )
    }
}

export default Acervo
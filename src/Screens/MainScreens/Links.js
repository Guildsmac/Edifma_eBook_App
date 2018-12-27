import React, {Component} from 'react'
import {View, Text, BackHandler} from 'react-native'
import {Actions} from "react-native-router-flux";
import LinkCard from '../../Components/LinkCard';
class Links extends Component{

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
            <View style={{flex:1}}>
                <LinkCard url={'https://editora.ifma.edu.br/'} title='Site EdIFMA' description='Site onde são disponibilizadas editais da editora IFMA, notícias e as obras'/>
                <LinkCard isSecondary url={'https://editora.ifma.edu.br/livraria-edifma/'} title='Livraria EdIFMA' description='Lista com todas as obras da Editora IFMA'/>
                <LinkCard url={'https://portal.ifma.edu.br/home'} title='Site do IFMA' description='Site do Instituto Federal do Maranhão'/>
            </View>
         )
    }
}

export default Links
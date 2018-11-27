import React, {Component} from 'react'
import {BackHandler, ScrollView} from 'react-native'
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
            <ScrollView>
                <ItemHeader initial='P'/>
                <ListItem
                    title="O Príncipe"
                    author="Nicolau Maquiavel"
                    description="Lorem ipsum dolor sit amet asdjghasgopksjdaf;akgljsdfoiwqjtpgoisjfasf asdfluiashfoasdfjqwep9r dfpwqeufhsa dfweouaisdflahgasfashfqwoijflmnas dfquwfas fqwofuinfliuafhoqwf nwoefuhesfd "
                    image={require("../../Images/standard-book.png")}
                />
                <ListItem
                    title="O Príncipe"
                    author="Nicolau Maquiavel"
                    description="Lorem ipsum dolor sit amet asdjghasgopksjdaf;akgljsdfoiwqjtpgoisjfasf asdfluiashfoasdfjqwep9r dfpwqeufhsa dfweouaisdflahgasfashfqwoijflmnas dfquwfas fqwofuinfliuafhoqwf nwoefuhesfd "
                    image={require("../../Images/standard-book.png")}
                />
                <ListItem
                    title="O Príncipe"
                    author="Nicolau Maquiavel"
                    description="Lorem ipsum dolor sit amet asdjghasgopksjdaf;akgljsdfoiwqjtpgoisjfasf asdfluiashfoasdfjqwep9r dfpwqeufhsa dfweouaisdflahgasfashfqwoijflmnas dfquwfas fqwofuinfliuafhoqwf nwoefuhesfd "
                    image={require("../../Images/standard-book.png")}
                />
                <ItemHeader initial='Q'/>
                <ListItem
                    title="O Príncipe"
                    author="Nicolau Maquiavel"
                    description="Lorem ipsum dolor sit amet asdjghasgopksjdaf;akgljsdfoiwqjtpgoisjfasf asdfluiashfoasdfjqwep9r dfpwqeufhsa dfweouaisdflahgasfashfqwoijflmnas dfquwfas fqwofuinfliuafhoqwf nwoefuhesfd "
                    image={require("../../Images/standard-book.png")}
                />
                <ListItem
                    title="O Príncipe"
                    author="Nicolau Maquiavel"
                    description="Lorem ipsum dolor sit amet asdjghasgopksjdaf;akgljsdfoiwqjtpgoisjfasf asdfluiashfoasdfjqwep9r dfpwqeufhsa dfweouaisdflahgasfashfqwoijflmnas dfquwfas fqwofuinfliuafhoqwf nwoefuhesfd "
                    image={require("../../Images/standard-book.png")}
                />
            </ScrollView>
         )
    }
}

export default Acervo
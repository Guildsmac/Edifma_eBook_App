import React, {Component} from 'react';
import {View, Text, BackHandler, Animated} from 'react-native';
import Hr from 'react-native-hr-plus';
import {cleanAll} from "../../Actions/authActions";
import {Actions} from 'react-native-router-flux';
import RecentlyViewedSlider from '../../Components/Slider/RecentlyViewedSlider';
import {connect} from 'react-redux';
import inheritStyle from '../styles';
import styles from './styles';
import MenuButton from '../../Components/MenuButton';
import {PRIMARY_BACKGROUND, PRIMARY_NORMAL, PRIMARY_NORMAL_FONT_COLOR} from "../../Consts/Colors";
import {PRIMARY_FONT} from "../../Consts/Fonts";

class Dashboard extends Component{

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    };

    handleBackPress = () => {
        this.props.cleanAll();
        Actions.loginScreen();

        return true;
    };

    _onBtnAcervoClick(){
        Actions.acervo();
    }

    _onBtnAboutClick(){
        Actions.about();
    }

    _onLinksImportantesClick(){
        Actions.links();
    }

    render() {
        return(
            <View style = {inheritStyle.container}>
                <View style ={styles.northArea}>
                    <MenuButton text="Acervo de Livros" action={() => this._onBtnAcervoClick()}/>
                    <MenuButton text="Sobre a Editora" action={() => this._onBtnAboutClick()}/>
                    <MenuButton text="Links importantes" action={() => this._onLinksImportantesClick()}/>
                </View>
                <View style={styles.southArea}>
                    <Hr color={PRIMARY_NORMAL} width={2} style={{marginHorizontal: 5, opacity: 0.6}}>
                        <Text style={{fontSize:20,paddingHorizontal:6, fontFamily:PRIMARY_FONT, color:PRIMARY_NORMAL_FONT_COLOR}}>Vistos recentemente</Text>
                    </Hr>
                    <RecentlyViewedSlider/>
                </View>
            </View>
         )
    }
}

export default connect(null, {cleanAll})(Dashboard);
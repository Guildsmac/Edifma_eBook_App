import {StyleSheet} from 'react-native';
import {PRIMARY_BACKGROUND, PRIMARY_NORMAL} from '../../Consts/Colors';
import {PRIMARY_FONT, PRIMARY_FONT_BLACK} from "../../Consts/Fonts";

export default StyleSheet.create({
    container:{
        backgroundColor: PRIMARY_NORMAL,
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,


    },
    text:{
        fontFamily: PRIMARY_FONT_BLACK,
        fontSize: 36,
    }
})
import {StyleSheet} from 'react-native'
import {PRIMARY_BACKGROUND, PRIMARY_NORMAL, PRIMARY_NORMAL_FONT_COLOR, SECONDARY_DARK} from "../../Consts/Colors";
import {PRIMARY_FONT} from "../../Consts/Fonts";
export default StyleSheet.create({
    container:{
        width: '90%',
        backgroundColor:PRIMARY_NORMAL,
        paddingLeft:20,
        borderRadius: 18,
        flexDirection: 'row',
        paddingVertical:8,
    },
    leftContainer:{
        width:'84%',
        justifyContent: 'center',
    },
    imageIcon:{
        height:42,
        width:42
    },
    rightContainer:{
        width:'10%',
    },
    verticalLine:{
        width: '1%',
        borderRightWidth: 1,
        borderRightColor: SECONDARY_DARK,
        opacity: 0.3,
        marginVertical: 5,
        marginRight:2,
    },
    buttonText:{
        fontSize: 24,
        color: PRIMARY_NORMAL_FONT_COLOR,
        fontFamily: PRIMARY_FONT
    }
})
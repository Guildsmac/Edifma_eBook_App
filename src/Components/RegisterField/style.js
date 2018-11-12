import {StyleSheet} from 'react-native'
import {
    PRIMARY_DARK,
    PRIMARY_DARK_FONT_COLOR,
    PRIMARY_NORMAL,
    PRIMARY_NORMAL_FONT_COLOR, SECONDARY_DARK,
    SECONDARY_FONT_COLOR
} from "../../Consts/Colors";
import {PRIMARY_FONT, PRIMARY_FONT_BLACK} from "../../Consts/Fonts";
export default StyleSheet.create({
    container:{
        width:'90%',
        borderColor: PRIMARY_DARK,
        elevation: 1.2,
        flexDirection: 'row'

    },
    textInput:{
        fontFamily: PRIMARY_FONT,
        color: PRIMARY_NORMAL_FONT_COLOR
    },
    leftContainer:{
        width: '24%',
        justifyContent: 'center',
        paddingLeft: 6

    },
    leftLabel:{
        fontFamily: PRIMARY_FONT,
        fontSize: 16,
        textAlign: 'left',
        color: PRIMARY_NORMAL_FONT_COLOR

    },
    rightContainer:{
        width: '75%',

    },
    verticalLine:{
        width: '1%',
        borderRightWidth: 1,
        borderRightColor: SECONDARY_DARK,
        opacity: 0.3,
        marginVertical: 5,
        marginRight:2,
    }
})
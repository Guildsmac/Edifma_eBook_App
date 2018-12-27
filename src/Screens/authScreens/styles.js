import {StyleSheet} from 'react-native';
import {
    PRIMARY_BACKGROUND, PRIMARY_DARK, PRIMARY_NORMAL,
    SECONDARY_COLOR,
    SECONDARY_DARK,
    SECONDARY_FONT_COLOR,
    SECONDARY_LIGHT, SECONDARY_NORMAL
} from '../../Consts/Colors';
import {PRIMARY_FONT, PRIMARY_FONT_BLACK} from "../../Consts/Fonts";

export default StyleSheet.create({
    mainContent: {
        flex: 7,
        width:'90%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal:24,
        alignSelf:'center',
        marginBottom:12

    },
    images:{
        flexDirection:'row',
        flex:3,
        justifyContent: 'space-around',
        alignItems:'center'


    },
    textError:{
        fontFamily: PRIMARY_FONT,
        color: '#f00',
        fontSize: 14,
        marginLeft:10,
        textAlign: 'left'
    },
    textErrorBig:{
        fontFamily: PRIMARY_FONT,
        color: '#f00',
        fontSize: 18,
        textAlign: 'center'
    },
    errorArea:{

        borderBottomWidth: 1,
        borderBottomColor: SECONDARY_DARK,
    },
    uniqueImage:{
        width:'80%',
        height:'80%'
    },
    text:{
        fontFamily: PRIMARY_FONT,
        fontSize: 18,

    },
    bigText:{
        fontFamily: PRIMARY_FONT_BLACK,
        fontSize: 24,
    },
    whiteText:{
        fontFamily: PRIMARY_FONT,
        fontSize: 18,
        color: PRIMARY_BACKGROUND,
        textAlign:'center'
    },
    inputField:{
        marginRight:16,
        borderColor: SECONDARY_DARK,
        borderBottomWidth: 0.4,
        fontFamily: PRIMARY_FONT,
    },
    button:{
        borderRadius:5,
        borderColor:PRIMARY_NORMAL,
        backgroundColor:PRIMARY_NORMAL,
        width:'90%',
        padding:12,
        elevation:4,
        alignItems:'center',
        justifyContent:'center'
    },
    secondaryButton:{
        backgroundColor: PRIMARY_BACKGROUND,
        borderColor: SECONDARY_DARK,
        borderWidth:0.5,
        elevation:4,
        borderRadius: 6,
        padding:12,
    },
    backButton:{
        backgroundColor: PRIMARY_BACKGROUND,
        borderColor: SECONDARY_DARK,
        borderWidth:0.5,
        elevation:4,
        borderRadius: 6,
        padding:12,
    },
    primaryText:{
        fontFamily: PRIMARY_FONT,
        fontSize: 18,
        color: PRIMARY_BACKGROUND,
        textAlign:'center'
    },
    secondaryText:{
        fontFamily: PRIMARY_FONT,
        fontSize: 18,
        color: PRIMARY_NORMAL,
        textAlign:'center'
    },
    link:{
        color: SECONDARY_FONT_COLOR,
        fontFamily: PRIMARY_FONT_BLACK,
        fontSize: 18,
        textAlign:'center',
        textShadowColor: SECONDARY_DARK,
        textShadowOffset:{width: 0.2, height: 0.1},
        textShadowRadius:4.5,
    },
})
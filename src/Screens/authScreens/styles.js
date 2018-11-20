import {StyleSheet} from 'react-native';
import {
    PRIMARY_BACKGROUND, PRIMARY_DARK,
    SECONDARY_COLOR,
    SECONDARY_DARK,
    SECONDARY_FONT_COLOR,
    SECONDARY_LIGHT
} from '../../Consts/Colors';
import {PRIMARY_FONT, PRIMARY_FONT_BLACK} from "../../Consts/Fonts";

export default StyleSheet.create({
    mainContent: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        width:'80%',
        alignSelf:'center',

    },
    images:{
        flexDirection:'row',
        flex:3,
        justifyContent: 'space-around',
        marginTop:10,
        marginBottom:10,


    },
    textError:{
        fontFamily: PRIMARY_FONT_BLACK,
        color: '#f00',
        fontSize: 20,
        textAlign: 'center'
    },
    errorArea:{
        borderBottomWidth: 1,
        borderBottomColor: SECONDARY_DARK,
    },
    uniqueImage:{
        width:'100%',
        height:'100%'
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
        color: SECONDARY_FONT_COLOR,
        textAlign:'center'
    },
    inputField:{
        width:'100%',
        marginRight:16,
        borderColor: SECONDARY_DARK,
        borderBottomWidth: 0.4,
        fontFamily: PRIMARY_FONT,
        marginTop:12
    },
    button:{
        backgroundColor: SECONDARY_DARK,
        borderRadius: 12,
        padding:12,
        marginTop:12
    },
    backButton:{
        backgroundColor: SECONDARY_LIGHT,
        borderRadius: 12,
        padding:12,
        marginTop:12
    },
    link:{
        color: SECONDARY_FONT_COLOR,
        fontFamily: PRIMARY_FONT_BLACK,
        fontSize: 18,
        textAlign:'center',
        textShadowColor: SECONDARY_DARK,
        textShadowOffset:{width: 0.2, height: 0.1},
        textShadowRadius:4.5
    },
})
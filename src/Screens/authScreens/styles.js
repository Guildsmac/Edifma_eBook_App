import {StyleSheet} from 'react-native';
import {
    PRIMARY_BACKGROUND, PRIMARY_DARK,
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
        color: SECONDARY_FONT_COLOR,
        textAlign:'center'
    },
    inputField:{
        marginRight:16,
        borderColor: SECONDARY_DARK,
        borderBottomWidth: 0.4,
        fontFamily: PRIMARY_FONT,
    },
    button:{
        backgroundColor: SECONDARY_DARK,
        borderRadius: 4,
        padding:12,
    },
    secondaryButton:{
        backgroundColor: SECONDARY_NORMAL,
        borderRadius: 4,
        padding:12,
    },
    backButton:{
        backgroundColor: SECONDARY_LIGHT,
        borderRadius: 4,
        padding:12,
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
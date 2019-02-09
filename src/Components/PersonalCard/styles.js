import {StyleSheet} from 'react-native'
import {PRIMARY_BACKGROUND, PRIMARY_DARK, PRIMARY_NORMAL, SECONDARY_DARK, SECONDARY_NORMAL} from "../../Consts/Colors";
import {PRIMARY_FONT, PRIMARY_FONT_BLACK} from "../../Consts/Fonts";
export default StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,


    },
    redDotImage:{
        position:'absolute',
        width:44,
        height:44,
        top:100,
        left:320,
        opacity:0.7
    },
    bigText:{
        fontFamily:PRIMARY_FONT_BLACK,
        marginLeft:4,
        fontSize:26,
    },
    normalText:{
        fontFamily:PRIMARY_FONT,
        fontSize:20,
        marginBottom: 10,
    },
    cardImage:{
        position:'absolute',
        width:100,
        height:100,
        borderWidth:3,
        borderColor:PRIMARY_DARK,
        top:22,
        paddingBottom:10,
        zIndex:1000000,
        left:-18,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderTopRightRadius:9,
        borderTopLeftRadius:9,
        borderRightWidth:0.1,
        borderTopWidth:0.1,
        elevation:1,

    },
    card:{
        flex:1,
        width:'100%',
        zIndex:-1000,
        borderWidth:0.5,
        borderColor:PRIMARY_NORMAL,
        borderTopWidth:0,
        borderBottomWidth:1,
        borderBottomLeftRadius:6,
        borderBottomRightRadius:6,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        elevation:1,
        paddingLeft:5,
    }
})
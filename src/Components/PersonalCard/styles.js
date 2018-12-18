import {StyleSheet} from 'react-native'
import {PRIMARY_BACKGROUND, PRIMARY_DARK, PRIMARY_NORMAL, SECONDARY_DARK, SECONDARY_NORMAL} from "../../Consts/Colors";
import {PRIMARY_FONT} from "../../Consts/Fonts";
export default StyleSheet.create({
    container:{
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        height:150,
        marginLeft:28,
        marginTop:4,
        marginBottom:20,

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
        fontFamily:PRIMARY_FONT,
        fontSize:24,
    },
    normalText:{
        fontFamily:PRIMARY_FONT,
        fontSize:18
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
        borderLeftWidth:3,
        borderRightWidth:0,
        borderBottomWidth:1,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderTopRightRadius:9,
        borderTopLeftRadius:9,
        elevation:1,
        paddingLeft:90,
        paddingTop:4,
    }
})
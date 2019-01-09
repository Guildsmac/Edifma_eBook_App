import {StyleSheet} from 'react-native'
import {PRIMARY_FONT} from "../../Consts/Fonts";
import {PRIMARY_BACKGROUND, PRIMARY_NORMAL, SECONDARY_DARK} from "../../Consts/Colors";
export default StyleSheet.create({
    northArea:{
        flex:11,
        alignItems:'center',
        justifyContent: 'space-evenly',
    },
    southArea:{
        flex:9,
    },
    bigText:{
        fontFamily:PRIMARY_FONT,
        fontSize:24,
    },
    normalText:{
        fontFamily:PRIMARY_FONT,
        fontSize:18
    },
    primaryButton:{
        borderRadius:5,
        borderColor:PRIMARY_NORMAL,
        backgroundColor:PRIMARY_NORMAL,
        width:'90%',
        height:75,
        elevation:4,
        alignItems:'center',
        justifyContent:'center'

    },
    primaryTextButton:{
        color:PRIMARY_BACKGROUND,
    },
    secondaryTextButton:{
        color:PRIMARY_NORMAL,
    },
    secondaryButton:{
        backgroundColor:PRIMARY_BACKGROUND,
        borderColor:SECONDARY_DARK,
        borderWidth:0.5,
        elevation:4,
        borderRadius:5,
        width:'90%',
        height:75,
        alignItems:'center',
        justifyContent:'center'
    }
})
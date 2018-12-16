import {StyleSheet} from 'react-native'
import {PRIMARY_FONT} from "../../Consts/Fonts";
export default StyleSheet.create({
    northArea:{
        flex:11,
        alignItems:'center',
        justifyContent: 'space-around',
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
})
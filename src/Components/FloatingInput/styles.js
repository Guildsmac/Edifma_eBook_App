import {StyleSheet} from 'react-native'
import {PRIMARY_LIGHT, PRIMARY_NORMAL} from "../../Consts/Colors";
import {PRIMARY_FONT} from "../../Consts/Fonts";
export default StyleSheet.create({

    container:{
        paddingTop:18,

    },
    inputStyle: {
        height:50,
        fontFamily: PRIMARY_FONT,
        fontSize:14,
        color:'#000',
        borderBottomWidth: 1,
        borderBottomColor: '#555',
        paddingLeft:6

    }

})
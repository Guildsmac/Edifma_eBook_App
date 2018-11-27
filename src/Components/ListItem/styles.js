import {StyleSheet} from 'react-native'
import {PRIMARY_NORMAL} from "../../Consts/Colors";
import {PRIMARY_FONT, PRIMARY_FONT_BLACK} from "../../Consts/Fonts";
export default StyleSheet.create({
    container:{
        borderBottomColor: PRIMARY_NORMAL,
        borderBottomWidth: 1,
        height:180,
        padding:10,
        flexDirection:'row',

    },
    topLeftArea:{
        flexDirection: 'row',
        flex:1.2,
        justifyContent: 'space-between',
        marginRight:25,
    },
    bottomLeftArea:{
        flex:1,
        marginRight:10
    },
    rightArea:{
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text:{
        fontFamily: PRIMARY_FONT,
        textAlign: 'left',

    },
    titleText:{
        fontSize: 24,
        fontFamily: PRIMARY_FONT_BLACK

    },
    authorText:{
        fontSize:21,

    },
    descriptionText:{
        fontSize:18,
    },
    imageIcon:{
        height: 64,
        width:64
    },
    mainImage:{
        padding:6,
        marginRight:3,
    },
    mainText:{
        flex:1,
        justifyContent:'center',
        flexWrap: 'wrap'
    }
})
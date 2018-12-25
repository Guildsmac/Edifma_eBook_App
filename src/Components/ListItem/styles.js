import {StyleSheet} from 'react-native'
import {PRIMARY_LIGHT, PRIMARY_NORMAL} from "../../Consts/Colors";
import {PRIMARY_FONT, PRIMARY_FONT_BLACK} from "../../Consts/Fonts";
export default StyleSheet.create({
    container:{
        borderBottomColor: PRIMARY_NORMAL,
        borderBottomWidth: 1,
        height:190,
        padding:10,
        flexDirection:'row',

    },

    imageView:{
        flex:3
    },

    contentView:{
        flex:7,
        marginLeft:3
    },

    infoView:{
        flex:5,
    },

    actionView:{
        flex:1,
        flexDirection:'row',
    },

    downloadButton:{
        flex:2,
        borderWidth:0.5,
        borderRadius:2,
        borderColor:'#000',
        backgroundColor:PRIMARY_NORMAL,
        alignItems:'center',
        justifyContent:'center'
    },

    readButton:{
        flex:1,
        borderWidth:0.5,
        borderColor:'#000',
        borderRadius:2,
        backgroundColor:PRIMARY_LIGHT,
        alignItems:'center',
        justifyContent:'center'
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
        fontSize: 22,
        fontFamily: PRIMARY_FONT_BLACK

    },
    authorText:{
        fontSize:19,

    },
    descriptionText:{
        fontSize:16,
    },
    imageIcon:{
        height: '100%',
        width:'100%'
    },
    mainImage:{
        padding:6,
        marginRight:3,
    },
    mainText:{
        flex:1,
        marginLeft:5,
        flexWrap: 'wrap'
    }
})
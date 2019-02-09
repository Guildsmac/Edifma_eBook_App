import {StyleSheet} from 'react-native'
import {PRIMARY_BACKGROUND, PRIMARY_LIGHT, PRIMARY_NORMAL, SECONDARY_DARK, SECONDARY_NORMAL} from "../../Consts/Colors";
import {PRIMARY_FONT, PRIMARY_FONT_BLACK} from "../../Consts/Fonts";
export default StyleSheet.create({
    container:{
        borderBottomColor: PRIMARY_NORMAL,
        borderBottomWidth: 1,
        height:190,
        padding:10,
        paddingBottom:5,
        flexDirection:'row',

    },
    notAvailable:{
        opacity:0.5
    },

    imageView:{
        flex:3
    },

    contentView:{
        flex:7,
        marginLeft:3,
    },

    infoView:{
        flex:5,
    },

    actionView:{
        flex:1,
        flexDirection:'row',
    },

    downloadButton:{
        flex:1.5,
        backgroundColor:PRIMARY_NORMAL,
        borderWidth:0.5,
        elevation:4,
        borderColor:PRIMARY_NORMAL,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginRight:5
    },

    readButton:{
        flex:1,
        borderColor:SECONDARY_DARK,
        elevation:4,
        borderWidth:0.5,
        backgroundColor:PRIMARY_BACKGROUND,
        borderRadius:5,
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
        width:'100%',
        borderRadius:8,
        borderColor: PRIMARY_NORMAL,
        borderWidth:0.3,
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
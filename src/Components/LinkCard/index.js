import React, {Component} from 'react'
import {TouchableOpacity, Linking, Text, ScrollView, View} from 'react-native'
import {PRIMARY_BACKGROUND, PRIMARY_NORMAL} from "../../Consts/Colors";
class LinkCard extends Component{

    constructor(props){
        super(props);

    }

    _handleClick(url){
        Linking.canOpenURL(url).then(supported => {
            if(supported)
                Linking.openURL(url);
            else
                alert('Não foi possível abrir o link!');
        });
    }

    render() {

        const backgroundStyle={
            backgroundColor: this.props.isSecondary ? PRIMARY_BACKGROUND : PRIMARY_NORMAL,

        };

        const textStyle = {
            textAlign: this.props.isSecondary ? 'right' : 'left',
            color: this.props.isSecondary ? PRIMARY_NORMAL : PRIMARY_BACKGROUND,

        };

        return(
            <TouchableOpacity onPress={() => {this._handleClick(this.props.url)}}>
                <View style={[{height:125, padding:8}, backgroundStyle]}>
                    <View>
                        <Text style={[{fontSize:24, fontFamily:'Roboto'}, textStyle]}>
                            {this.props.title}
                        </Text>
                    </View>
                    <View style={{marginTop:12}}>
                        <Text style={[{fontSize:16, fontFamily:'Roboto'}, textStyle]}>
                            {this.props.description}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
         )
    }
}

export default LinkCard
import React, {Component} from 'react'
import {View, TouchableOpacity,TouchableHighlight,TouchableNativeFeedback, Image, Text} from 'react-native'
import styles from './styles';
import {connect} from 'react-redux';
import {fetchProtectedEbook} from '../../Actions/mainActions';
import {PRIMARY_BACKGROUND, PRIMARY_NORMAL} from "../../Consts/Colors";

class ListItem extends Component{

    constructor(props){
        super(props);
    }

    _downloadClick = () => {
        this.props.fetchProtectedEbook(this.props.idusuario, this.props.id, true);

    };

    _getAvailability = (originalStyles, customs) => {
        if(this.props.isAvailable)
            return [originalStyles, customs];
        return [originalStyles, styles.notAvailable, customs];
    };

    _getButtonText = () =>{
        if(this.props.isAvailable)
            return "FAZER DOWNLOAD";
        return "LIVRO INDISPONÍVEL";
    };

    _getButtonLink = () =>{
        if(this.props.isAvailable)
            return this._downloadClick;
        return () => {alert('Livro indisponível. Por favor, entrar em contato com a instituição para liberação.')};
    };

    render() {
        let _imageUrl = this.props.image.uri;

        if(_imageUrl.length === 0)
            _imageUrl = require('../../Images/question-mark.png');
        else{
            _imageUrl = 'http://' + _imageUrl;
            _imageUrl = {uri: _imageUrl};
        }

        return(
            <View style={styles.container}>
                <View style={this._getAvailability(styles.imageView, {})}>
                    <Image style={this._getAvailability(styles.imageIcon, {})} source={_imageUrl}/>
                </View>
                <View style={styles.contentView}>
                    <View style={styles.infoView}>
                        <View style={this._getAvailability(styles.mainText, {flex:2})}>
                            <Text style={this._getAvailability([styles.text, styles.titleText], {})} numberOfLines={1}>
                                {this.props.title}
                            </Text>
                            <Text style={this._getAvailability([styles.text, styles.authorText], {})} numberOfLines={1}>
                                Por {this.props.author}
                            </Text>
                        </View>
                        <View style={{flex:3}}>
                            <Text style={this._getAvailability([styles.text, styles.descriptionText], {})} numberOfLines={4}>
                                {this.props.description}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.actionView}>
                        <TouchableNativeFeedback onPress={this._getButtonLink()} background={TouchableNativeFeedback.SelectableBackground()}>
                            <View style={styles.downloadButton}>
                                <Text style={[styles.text, {color:PRIMARY_BACKGROUND}]}>{this._getButtonText()}</Text>
                            </View>
                        </TouchableNativeFeedback>
                        {/*<TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
                            <View style={styles.readButton}>
                                <Text style={[styles.text, {color:PRIMARY_NORMAL}]}>LER AGORA</Text>
                            </View>
                        </TouchableNativeFeedback>*/}
                    </View>
                </View>
            </View>
         )
    }
}

const mapStateToProps = (state) => ({
    idusuario: state.authReducers.idusuario,
});

export default connect(mapStateToProps, {fetchProtectedEbook})(ListItem)
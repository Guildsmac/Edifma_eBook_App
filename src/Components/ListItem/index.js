import React, {Component} from 'react'
import {View, TouchableOpacity,TouchableHighlight,TouchableNativeFeedback, Image, Text} from 'react-native'
import styles from './styles';
import {connect} from 'react-redux';
import {fetchProtectedEbook} from '../../Actions/mainActions';
import {PRIMARY_BACKGROUND, PRIMARY_NORMAL} from "../../Consts/Colors";

class ListItem extends Component{

    _downloadClick = () => {
        this.props.fetchProtectedEbook(this.props.idusuario, this.props.id, true);

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
                <View style={styles.imageView}>
                    <Image style={styles.imageIcon} source={_imageUrl}/>
                </View>
                <View style={styles.contentView}>
                    <View style={styles.infoView}>
                        <View style={[styles.mainText, {flex:2}]}>
                            <Text style={[styles.text, styles.titleText]} numberOfLines={1}>
                                {this.props.title}
                            </Text>
                            <Text style={[styles.text, styles.authorText]} numberOfLines={1}>
                                Por {this.props.author}
                            </Text>
                        </View>
                        <View style={{flex:3}}>
                            <Text style={[styles.text, styles.descriptionText]} numberOfLines={4}>
                                {this.props.description}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.actionView}>
                        <TouchableNativeFeedback onPress={this._downloadClick} background={TouchableNativeFeedback.SelectableBackground()}>
                            <View style={styles.downloadButton}>
                                <Text style={[styles.text, {color:PRIMARY_BACKGROUND}]}>FAZER DOWNLOAD</Text>
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

            /*<View style={styles.container}>
                <TouchableOpacity style={{flex:1}}>
                    <View style={styles.topLeftArea}>
                        <View style={styles.mainImage}>
                            <Image style={styles.imageIcon} source={_imageUrl}/>
                        </View>
                        <View style={styles.mainText}>
                            <Text style={[styles.text, styles.titleText]} numberOfLines={1}>
                                {this.props.title}
                            </Text>
                            <Text style={[styles.text, styles.authorText]} numberOfLines={1}>
                                Por {this.props.author}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.bottomLeftArea}>
                        <Text style={[styles.text, styles.descriptionText]} numberOfLines={3}>
                            {this.props.description}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.rightArea}>
                    <TouchableOpacity onPress={this._downloadClick}>
                        <Image style={styles.imageIcon} source={require('../../Images/download-book.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.imageIcon} source={require('../../Images/open-book.png')}/>
                    </TouchableOpacity>
                </View>
            </View>*/
         )
    }
}

const mapStateToProps = (state) => ({
    idusuario: state.authReducers.idusuario,
});

export default connect(mapStateToProps, {fetchProtectedEbook})(ListItem)
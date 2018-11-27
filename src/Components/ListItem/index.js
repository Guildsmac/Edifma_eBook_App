import React, {Component} from 'react'
import {View, TouchableOpacity, Image, Text} from 'react-native'
import styles from './styles';
class ListItem extends Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <View style={styles.topLeftArea}>
                        <View style={styles.mainImage}>
                            <Image style={styles.imageIcon} source={this.props.image}/>
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
                </View>
                <View style={styles.rightArea}>
                    <TouchableOpacity>
                        <Image style={styles.imageIcon} source={require('../../Images/download-book.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.imageIcon} source={require('../../Images/open-book.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
         )
    }
}

export default ListItem
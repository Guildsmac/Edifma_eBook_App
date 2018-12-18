import React, {Component} from 'react';
import {View,TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles'
class PersonalCard extends Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.cardImage}>
                    <Image style={{width:100, height:100, borderRadius:10}}  source = {this.props.image}/>
                </View>
                <TouchableOpacity style={styles.card}>
                    <View>
                        <Text numberOfLines={1} style={styles.bigText}>{this.props.name}</Text>
                    </View>
                    <View style={{marginTop:2}}>
                        <Text numberOfLines={5} style={[styles.normalText]}>{this.props.description}</Text>
                    </View>
                </TouchableOpacity>
            </View>
         )
    }
}

export default PersonalCard
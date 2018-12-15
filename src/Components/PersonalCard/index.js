import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles'
class PersonalCard extends Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.cardImage}>
                    <Image style={{width:100, height:100, borderRadius:10}}  source = {this.props.image}/>
                </View>
                <View style={styles.card}>
                    <View>
                        <Text numberOfLines={1} style={styles.bigText}>{this.props.name}</Text>
                    </View>
                    <View style={{marginTop:5}}>
                        <Text numberOfLines={4} style={[styles.normalText, {marginRight:40}]}>{this.props.description}</Text>
                    </View>
                </View>
            </View>
         )
    }
}

export default PersonalCard
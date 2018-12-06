import React, {Component} from 'react'
import {Text} from 'react-native'
import styles from './styles'
class ItemHeader extends Component{
    render() {

        return(
            <Text style={styles.main}>
                {this.props.initial}
            </Text>
         )
    }
}

export default ItemHeader
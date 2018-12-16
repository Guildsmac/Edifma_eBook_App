import React, {Component} from 'react'
import {ScrollView, Text, View} from 'react-native'
import PersonalCard from '../../Components/PersonalCard';
import {PRIMARY_NORMAL, PRIMARY_NORMAL_FONT_COLOR} from "../../Consts/Colors";
import {PRIMARY_FONT} from "../../Consts/Fonts";
import Hr from "react-native-hr-plus";
import styles from './styles'

class About extends Component {
    render() {
        return (
            <ScrollView style={{
            }}>
                <Hr color={PRIMARY_NORMAL} width={2} style={{marginHorizontal: 5, opacity: 0.6}}>
                    <Text style={{fontSize:20,paddingHorizontal:6, fontFamily:PRIMARY_FONT, color:PRIMARY_NORMAL_FONT_COLOR}}>A Editora</Text>
                </Hr>
                <Text style={[styles.normalText, {marginHorizontal:12, marginBottom:20, marginTop:8}]}>{'\t\t'}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est purus, mollis sit amet leo at, bibendum volutpat odio. Maecenas cursus tortor molestie aliquam dictum. Aliquam vehicula congue lacus nec aliquam. Ut eleifend lobortis pulvinar. Donec semper massa eget velit dictum tempus. Etiam viverra orci et vestibulum dignissim. Integer porta feugiat tincidunt. </Text>
                <Hr color={PRIMARY_NORMAL} width={2} style={{marginHorizontal: 5, opacity: 0.6}}>
                    <Text style={{fontSize:20,paddingHorizontal:6, fontFamily:PRIMARY_FONT, color:PRIMARY_NORMAL_FONT_COLOR}}>A Equipe</Text>
                </Hr>
                <PersonalCard name={'Donald J Westbrooks'} description={'Curabitur faucibus vestibulum neque quis molestie. Morbi porttitor sollicitudin mi vel rutrum. Fusce condimentum efficitur velit, sed laoreet eros egestas quis.'}
                image={{uri: 'https://www.fakepersongenerator.com/Face/male/male20151083664912780.jpg'}}
                />
                <PersonalCard image={{uri:'https://www.fakepersongenerator.com/Face/male/male1084275450287.jpg'}}
                name={'Nicholas J Ochoa'}
                description={'Vivamus congue aliquam eros a blandit. In nisi mauris, mattis eget ultrices in, finibus vitae lacus. Phasellus ac sagittis arcu, quis sollicitudin neque.'}/>
                <PersonalCard image={{uri:'https://www.fakepersongenerator.com/Face/female/female20131023636745056.jpg'}}
                name={'Deanna T Hernandez'}
                description={'Phasellus sed elit a mi iaculis tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'}/>
                <PersonalCard image={{uri:'https://www.fakepersongenerator.com/Face/female/female20151024243667908.jpg'}}
                name={'Lucy T Yamamoto'}
                description={'Mauris euismod, augue sit amet congue finibus, augue nisl tincidunt purus, id vehicula arcu tortor ut massa.'}/>
                <PersonalCard image={{uri:'https://www.fakepersongenerator.com/Face/female/female20121023495479645.jpg'}}
                name={'Janice R Rapp'}
                description={'Etiam non volutpat nulla. Vivamus ut venenatis lacus. '}/>
                <PersonalCard image={{uri:'https://www.fakepersongenerator.com/Face/female/female20151024116901336.jpg'}}
                name={'Karen W Westley'}
                description={'Duis sit amet nibh lorem. Curabitur vulputate nulla leo, non varius tellus lobortis quis. Integer ipsum diam, tempor et quam ac, consequat ultrices est.'}/>
            </ScrollView>
        )
    }
}

export default About
import React, {Component} from 'react'
import {ScrollView, View} from 'react-native'
import PersonalCard from '../../Components/PersonalCard';

class About extends Component {
    render() {
        return (
            <ScrollView style={{
            }}>
                <PersonalCard name={'Donald J Westbrooks'} description={'Gender: male' +
                '\n' +
                'Race: Hispanic' +
                '\n' +
                'Birthday: 7/10/1995 (23 years old)'}
                image={{uri: 'https://www.fakepersongenerator.com/Face/male/male20151083664912780.jpg'}}
                />
                <PersonalCard image={{uri:'https://www.fakepersongenerator.com/Face/male/male1084275450287.jpg'}}
                name={'Nicholas J Ochoa'}
                description={'Gender: male\n'
                 +
                'Race: White\n'
                 +
                'Birthday: 6/9/1955 (63 years old)'}/>
                <PersonalCard image={{uri:'https://www.fakepersongenerator.com/Face/female/female20131023636745056.jpg'}}
                name={'Deanna T Hernandez'}
                description={'Gender: female\n'
                 +
                'Race: Hispanic\n'
                 +
                'Birthday: 8/5/1964 (54 years old)'}/>
                <PersonalCard image={{uri:'https://www.fakepersongenerator.com/Face/female/female20151024243667908.jpg'}}
                name={'Lucy T Yamamoto'}
                description={'Gender: female\n'
                 +
                'Race: White\n'
                 +
                'Birthday: 3/22/1980 (38 years old)'}/>
                <PersonalCard image={{uri:'https://www.fakepersongenerator.com/Face/female/female20121023495479645.jpg'}}
                name={'Janice R Rapp'}
                description={'Gender: female\n'
                +
                'Race: White\n'
                +
                'Birthday: 12/5/1981 (37 years old)'}/>
                <PersonalCard image={{uri:'https://www.fakepersongenerator.com/Face/female/female20151024116901336.jpg'}}
                name={'Karen W Westley'}
                description={'Gender: female\n'
                 +
                'Race: White\n'
                 +
                'Birthday: 1/4/1996 (22 years old)'}/>
            </ScrollView>
        )
    }
}

export default About
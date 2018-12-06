import React, {Component} from 'react'
import {ScrollView, SectionList} from 'react-native'
import ListItem from "../ListItem";
import ItemHeader from "../ItemHeader";
class BookSelectionList extends Component{

    //PEGAR OS DADOS E ORDENÁ-LOS PELO HEADER E NOMES

    constructor(props){
        super(props);
    }

    _getOrderedList(data){
        let alphabet='abcdefghijklmnopqrstuvwxyz#';
        let r = [];
        for(let i in alphabet){
            let temp = this._getDataFromInitial(data, alphabet[i]);
            if(temp.length!=0)
                r[alphabet[i]] = temp;

        }
        let orderedList = [];
        for(let i in r)
            orderedList.push({title: i.toUpperCase(), data: [...r[i]]});

        return orderedList;
    }

    _getDataFromInitial(data, letter){
        let r = [];
        for(let i in data){
            if(letter==='#' && !data[i].titulo[0].toLowerCase().match(/[a-z]/i))
                r.push(data[i]);
            else {
                if (data[i].titulo[0].toLowerCase() === letter)
                    r.push(data[i]);
            }
        }
        return r;
    }

    render() {
        let _data = this.props.data;
        return(
            <ScrollView style={{flex:1}}>
                <SectionList
                    renderItem={({item}) =>
                        <ListItem
                            image = {{uri: item.icon_img_path}}
                            id = {item.ide_book}
                            title = {item.titulo}
                            author = {item.autor}
                            description = {item.descricao}
                        />
                    }
                    renderSectionHeader={({section: {title}}) => (
                        <ItemHeader initial = {title}/>
                    )}
                    sections={this._getOrderedList(_data)}
                    keyExtractor={(item, index) => item+index}
                />
            </ScrollView>
        )


    }
}

export default BookSelectionList
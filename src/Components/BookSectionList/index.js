import React, {Component} from 'react'
import {View} from 'react-native'
class BookSelectionList extends Component{

    //PEGAR OS DADOS E ORDENÁ-LOS PELO HEADER E NOMES

    constructor(props){
        super(props);
    }

    _getOrderedList(data){
        let alphabet='abcdefghijklmnopqrstuvwxyz';
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
            if(data[i].titulo[0].toLowerCase()===letter)
                r.push(data[i]);
        }
        return r;
    }

    getCurrentState(){

    }

    render() {
    }
}

export default BookSelectionList
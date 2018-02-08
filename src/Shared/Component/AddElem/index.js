import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import './index.css'
import {Link} from "react-router-dom";


@inject('elementStore') @observer export default class AddElem extends Component{
    sendElement(item){
        item.title === ''? alert('Input new item title'):this.props.elementStore.addElement(item);
    }
    render(){
        let NewItem= {
            title: '',
            NumberOfComments: 0,
            comments: []
        };
        return(
            <div className='AddElem'>
                <div className='header'>
                    <Link to='/' className='HomeButton'><p className='button-text'>&#8592;</p></Link>
                    <p>Create New Item</p>
                </div>
                <div>
                    <input placeholder='New item title...' id='inputNewItem' onChange={(item)=>NewItem.title=item.target.value} type="text"/>
                    <button onClick={()=>{
                        this.sendElement(NewItem);
                        document.getElementById('inputNewItem').value = '';
                        NewItem={}
                    }}>&gt;</button>
                </div>
            </div>
        )
    }
}
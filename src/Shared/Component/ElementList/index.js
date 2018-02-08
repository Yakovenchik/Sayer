import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import './index.css'
import {Link} from 'react-router-dom'

@inject('elementStore') @observer export default class ElementList extends Component{
    render(){
        const elementStore = this.props.elementStore;
        return(
            <div className='elemList'>
                <div className='Header'>
                    <h1>Sayer</h1>
                    <p>World's most used time waster</p>
                </div>
                <div className='Body'>
                    {elementStore.elementList.map((item, i)=>
                        {
                            return(
                                <div
                                    onMouseOver={()=>{document.getElementById('number').style.display='none';document.getElementById('delete').style.display='block'}}
                                    onMouseOut={()=>{document.getElementById('number').style.display='block';document.getElementById('delete').style.display='none'}}
                                    className='elem'
                                    key={i}>
                                    <Link className='title' to='/Item' onClick={()=>{this.props.elementStore.element=item;localStorage['ItemID']=i}}>{item.title}</Link>
                                    <div id='number'>{item.NumberOfComments}</div>
                                    <div id='delete' onClick={()=>elementStore.removeElement(i)}>Delete</div>
                                </div>
                            )
                        }
                    )}
                    <Link to='/NewItem' className='AddButton'>+</Link>

                </div>
            </div>
        )
    }
}
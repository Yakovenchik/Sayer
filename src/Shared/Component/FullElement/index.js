import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import './index.css'
import {Link} from "react-router-dom";


@inject('elementStore') @observer export default class FullElement extends Component{
    addComment(comment){
        let id=JSON.parse(localStorage.getItem('ItemID'));
        comment !== ''? this.props.elementStore.addComment(id, comment): alert('Input comment');
        document.getElementById('InputComment').value = '';
    }
    render(){
        let elem=this.props.elementStore.element, NewComment='';
        if (elem.title===undefined) {
            document.location.href='/'
        }
            return(
            <div className='Elem'>
                <div className='header'>
                    <Link to='/' onClick={()=>{this.props.elementStore.element='';localStorage['ItemID']=''}} className='HomeButton'><h1 className='button-text'>&#8592;</h1></Link>
                    <h1>{elem.title}</h1>
                </div>
                <div>
                    {elem.comments.map((item, i)=>{
                        return(
                            <p className='comment' key={i}>{item}</p>
                        )
                    })}
                </div>
                <div>
                    <input placeholder='New comment goes here...' id='InputComment' onChange={(item)=>NewComment=item.target.value} type="text"/>
                    <button onClick={()=>{
                        this.addComment(NewComment);
                    }
                    }>&gt;</button>
                </div>
            </div>
        )
    }
}
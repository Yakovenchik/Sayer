import React, {Component} from 'react';
import AddElem from "../../Component/AddElem/index";
import stores from '../../Store/index';
import {Provider} from 'mobx-react'

export default class NewItem extends Component{
    render() {
        return (
            <Provider elementStore={stores.elementStore}>
                <AddElem />
            </Provider>
        )
    }
}
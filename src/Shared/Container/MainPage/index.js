import React, {Component} from 'react';
import ElementList from "../../Component/ElementList/index";
import stores from '../../Store/index';
import {Provider} from 'mobx-react'

export default class MainPage extends Component{
    render() {
        return (
            <Provider elementStore={stores.elementStore}>
                <ElementList />
            </Provider>
        )
    }
}
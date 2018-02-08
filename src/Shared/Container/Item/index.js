import React, {Component} from 'react';
import FullElement from "../../Component/FullElement/index";
import stores from '../../Store/index';
import {Provider} from 'mobx-react'

export default class Item extends Component{
    render() {
        return (
            <Provider elementStore={stores.elementStore}>
                <FullElement />
            </Provider>
        )
    }
}
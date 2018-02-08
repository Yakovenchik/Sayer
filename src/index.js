import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './index.css';
import MainPage from './Shared/Container/MainPage/index';
import Item from './Shared/Container/Item/index';
import NewItem from './Shared/Container/NewItem/index';

const root = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/NewItem" component={NewItem} />
                <Route exact path="/Item" component={Item}/>
            </Switch>
    </BrowserRouter>
    , root);
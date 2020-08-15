import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';
import {Route, Switch} from 'react-router-dom';
import ItemPage from '../pages/ItemPage';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    return (
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/trash' exact component={CartPage}/>
                <Route path='/:id' render={
                    ({match}) => {
                        const {id} = match.params;
                        return <ItemPage menuId={id}></ItemPage>
                    }} />
            </Switch>
            </div>
    )
}

export default App;
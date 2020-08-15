import React, {Component} from 'react';
import { connect } from 'react-redux';
import MenuListItem from '../menu-list-item';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuOnError, toggleSelectedItem} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class ItemPage extends Component {
    componentDidMount() {
        if( this.props.menuItems.length === 0){

            this.props.menuRequested();

            const {RestoService} = this.props;
            RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(() => this.props.menuOnError());
        }
    }

    render() {
        const {menuItems, menuId, error, loading} = this.props;

        if(error) {
            return <Error />;
        }

        if(loading || menuItems.length == 0) {
            return <Spinner />;
        }

        const {title, price, url, category} = menuItems[menuId];

        return(
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuOnError,
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));
import React from 'react';
import './cart-table.scss';
import {removeFromCart} from '../../actions';
import {connect} from 'react-redux';

const CartTable = ({items, removeFromCart}) => {

    let uniqueItems = [];

    items.forEach(item => {
        const elem = uniqueItems.find(arrItem => arrItem.id === item.id);
        if(elem){
            elem.count += 1;
        } else {
            item.count = 1;
            uniqueItems.push(item);
        }
    });

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                    {
                        uniqueItems.map(item => {
                            const {title, price, url, id, count} = item;
                            return(
                                <div key={id} className="cart__item">
                                    <img src={url} className="cart__item-img" alt={title}></img>
                                    <div className="cart__item-title">{title}</div>
                                    <div className="cart__item-price">{price}$</div>
                                    <div className="cart__item-count">X{count}</div>
                                    <div onClick={() => removeFromCart(id)} className="cart__close">&times;</div>
                                </div>
                            )
                        })
                    }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items,
    }
}

const mapDispatchToProps = {
    removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
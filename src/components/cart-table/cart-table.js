import React from 'react';
import './cart-table.scss';
import {removeFromCart} from '../../actions';
import {connect} from 'react-redux';

const CartTable = ({items, removeFromCart}) => {

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                    {
                        items.map(item => {
                            const {title, price, url, id} = item;

                            return(
                                <div className="cart__item">
                                    <img src={url} className="cart__item-img" alt={title}></img>
                                    <div className="cart__item-title">{title}</div>
                                    <div className="cart__item-price">{price}$</div>
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
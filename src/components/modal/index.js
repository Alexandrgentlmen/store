import React from "react";
import PropTypes from 'prop-types';
import Head from "../head";
import List from "../list";
import './style.css';
import { cn as bem } from '@bem-react/classname';

function Modal(props) {
  const cn = bem('Modal');

  const modal = props.modalActive;

  return (

    <div className={cn('wrapper')}>
      <div className={cn()}>
        <Head
          title='Корзина'
          condition='head-cart'
          onCloseCart={props.onCloseCart} />
        <List
          condition='cart'
          cart={props.cart}
          onDeleteItem={props.onDeleteItem} />
      </div>
    </div>
  )
}




Modal.propTypes = {
  onDeleteItem: PropTypes.func,
  onAddItem: PropTypes.func,
};

export default React.memo(Modal);
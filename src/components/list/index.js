import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import { cn as bem } from '@bem-react/classname';
import './style.css';

function List(props) {
  const cn = bem('List');

  if (props.condition === 'store') {
    console.log('props.list', props.list);
    return (
      <div className={cn()}>{
        props.list.map(item =>
          <div key={item.code} className={cn('item')}>
            <Item item={item} condition={props.condition} onAdd={props.onAddItem} />
          </div>
        )}
      </div>
    )
  }

  if (props.condition === 'cart') {
    console.log('props.cart', props.cart);
    return (
      <div className={cn()}>{
        props.cart.map(item =>
          <div key={item.code} className={cn('item')}>
            <Item item={item} condition={props.condition} onDelete={props.onDeleteItem} />
          </div>
        )}
      </div>
    )
  }
}

List.propTypes = {
  condition: PropTypes.string,
  cart: PropTypes.array,
  list: PropTypes.array,
  onDeleteItem: PropTypes.func,
  onAddItem: PropTypes.func,
};

List.defaultProps = {
  onDeleteItem: () => {
  },
  onAddItem: () => {
  }
}

export default React.memo(List);

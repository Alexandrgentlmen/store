import React from "react";
import PropTypes from "prop-types";
import Controls from "../controls";
// import { plural } from "../../utils";
import { cn as bem } from '@bem-react/classname';
import './style.css';

function Item(props) {
  const cn = bem('Item');

  return (
    <div className={cn()}>
      <div className={cn('code')}>{props.item.code}</div>
      <div className={cn('title')}>
        {props.item.title}
      </div>
      <div className={cn('actions')}>
        <p className={cn('price')}>{props.item.price}&nbsp; ₽</p>
        {props.condition === 'cart' && <p className={cn('price_cart')}>{props.item.counts} шт</p>}
        {props.condition === 'cart' && <Controls code={props.item.code} condition={props.condition} onDelete={props.onDelete} />}
        {props.condition === 'store' && <Controls item={props.item} condition={props.condition} onAdd={props.onAdd} />}
      </div>
    </div >
  );
}

Item.propTypes = {
  condition: PropTypes.string,
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    counts: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
  onAdd: PropTypes.func
};

Item.defaultProps = {
  onAdd: () => {
  },
  onDelete: () => {
  },
}

export default Item;

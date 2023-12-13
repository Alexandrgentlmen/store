import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls(props) {

  const callbacks = {
    onAdd: () => {
      props.onAdd(props.item);
    },
    onDelete: () => {
      props.onDelete(props.code);
    },
    onCloseCart: () => {
      props.onCloseCart();
    },
    onEnterCart: () => {
      props.onEnterCart();
    }
  }

  return (
    <span className='Controls'>
      {props.condition === 'store' && <button onClick={() => callbacks.onAdd()}>Добавить</button>}
      {props.condition === 'cart' && <button onClick={() => callbacks.onDelete()}>Удалить</button>}
      {props.condition === 'head-cart' && <button onClick={() => callbacks.onCloseCart()}>Закрыть</button>}
      {props.condition === 'head-store' && <button onClick={() => callbacks.onEnterCart()}>Перейти</button>}
    </span>
  )
}

Controls.propTypes = {
  code: PropTypes.number,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
  onCloseCart: PropTypes.func,
  onEnterCart: PropTypes.func,
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    counts: PropTypes.number,
  }),
};

Controls.defaultProps = {
  onAdd: () => { },
  onDelete: () => { },
  onCloseCart: () => { },
  onEnterCart: () => { },
}

export default React.memo(Controls);

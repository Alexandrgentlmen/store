import React from "react";
import PropTypes from "prop-types";
import Controls from "../controls";

import { cn as bem } from '@bem-react/classname';
import './style.css';


function Head(props) {
  const cn = bem('Head');
  const nameTitle = props.title;

  if (nameTitle === 'Магазин') { return <div className={cn()}><h1>{props.title}</h1></div> }

  if (nameTitle === 'Корзина') {
    return (
      <div className={cn('cart')}>
        <h1>{props.title}</h1>
        <Controls
          onCloseCart={props.onCloseCart}
          condition={props.condition}
        />
      </div>
    )
  }

}

Head.propTypes = {
  condition: PropTypes.string,
  title: PropTypes.node,
  onCloseCart: PropTypes.func,
};

Head.defaultProps = {
  onCloseCart: () => {
  },
};


export default React.memo(Head);

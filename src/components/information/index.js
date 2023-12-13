import React from "react";
import PropTypes from "prop-types";
import Controls from "../controls";

import { cn as bem } from '@bem-react/classname';
import './style.css';


function Information(props) {
  const cn = bem('Information');

  return (
    props.condition === 'head-store' &&
    <div className={cn()}>
      <p className={cn('text')}><b>{props.title}: {props.cartItems} товара / {props.summ}</b></p>
      <Controls condition={props.condition} onEnterCart={props.onEnterCart} />
    </div>
  )
}

Information.propTypes = {
  condition: PropTypes.string,
  title: PropTypes.node,
};

export default Information;

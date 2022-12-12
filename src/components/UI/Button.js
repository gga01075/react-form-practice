import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      /* 
      타입이 있으면 전달받은 타입을, 없으면 기본타입으로 'button'을 지정합니다.  
      */
      type={props.type || "button"}
      /* 
      사용자 지정 Button컴포넌트에 있는 props를 통해 handler함수를 가져오기 위해
      props.onClick을 전닳합니다. 
      그래서 Button컴포넌트에 속성으로 onClick을 갖고 거기서 받은 함수는
      onClick속성을 통해 내장된 button컴포넌트에 전달될것입니다. 
      */
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

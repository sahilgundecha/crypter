import React, { useState } from 'react';
import styles from './buttoncomponent.module.css';

interface Props {
  children?: React.ReactNode;
  handleClick?: () => void;
  btnColor?: string;
  labelColor?: string;
  isDisabled?: boolean;
  styleType?: string;
  customStyle?: object;
  buttonType?: 'submit' | 'reset' | 'button';
  classNames?: string;
}
const whiteColor = 'white';

const ButtonComponent: React.FC<Props> = ({
  children,
  handleClick,
  btnColor = 'teal',
  labelColor,
  isDisabled,
  styleType,
  customStyle,
  buttonType,
  classNames,
}) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  const outlineStyles = {
    boxShadow: '0 0 0 2px #e6e8ec inset',
    color: btnColor,
    backgroundColor: whiteColor,
  };
  const outlineHoverStyle = {
    color: labelColor || 'white',
    backgroundColor: '#3772FF',
  };
  const roundedStyle = {
    backgroundColor: btnColor,
    color: labelColor || whiteColor,
    borderRadius: '25px',
  };
  const disabledStyle = {
    cursor: 'default',
    backgroundColor: btnColor,
    color: labelColor || whiteColor,
    opacity: 0.4,
  };
  const normalStyle = {
    backgroundColor: btnColor,
    color: labelColor || whiteColor,
  };
  let btnStyle;
  switch (styleType) {
    case 'normal':
      btnStyle = normalStyle;
      break;
    case 'outline':
      if (hover) {
        btnStyle = outlineHoverStyle;
      } else {
        btnStyle = outlineStyles;
      }
      break;
    default:
      btnStyle = roundedStyle;
      break;
  }

  return (
    <button
      style={
        isDisabled
          ? { ...btnStyle, ...disabledStyle, ...customStyle }
          : { ...btnStyle, ...customStyle }
      }
      type={buttonType}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={!isDisabled ? handleClick : () => {}}
      className={`${styles.buttonStyles} ${classNames}`}
      disabled={isDisabled}
    >
      {children || 'button'}
    </button>
  );
};

export default ButtonComponent;

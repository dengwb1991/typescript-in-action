import classnames from 'classnames'
import React from 'react'

/**
 * Prop interface
 */
export interface IButtonProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * React Component
 */
export const Button: React.SFC<IButtonProps> = (props) => {
  const { className, children } = props;

  const rootStyle = classnames('primary-button', 'button', {
    [`${className}`]: Boolean(className),
  })

  return (
    <button className={rootStyle}>
      {children}
    </button>
  )
}
export default Button
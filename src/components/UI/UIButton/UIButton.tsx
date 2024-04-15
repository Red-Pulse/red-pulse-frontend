import { ButtonHTMLAttributes, CSSProperties, FC } from 'react';
import cn from 'classnames';
import { colors } from 'assets/colors.ts';
import './UIButton.scss';

interface UIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary';
  rounded?: boolean;
  style?: CSSProperties;
}

const UIButton: FC<UIButtonProps> = ({
  variant,
  size = 'medium',
  rounded,
  style,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn([
        'ui-button',
        `ui-button__size-${size}`,
        rounded && `ui-button__rounded`,
        props.disabled && 'ui-button__disabled',
      ])}
      style={{
        ...style,
        ...(variant === 'primary' && {
          background: colors.red,
          color: colors.textWhite,
        }),
      }}
    >
      {props.children}
    </button>
  );
};

export default UIButton;

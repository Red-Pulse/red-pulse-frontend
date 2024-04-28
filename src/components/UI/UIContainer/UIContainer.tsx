import React, { FC } from 'react';
import './UIContainer.scss';
import cn from 'classnames';

interface UIContainerProps {
  fluid?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const UIContainer: FC<UIContainerProps> = (props) => {
  return (
    <div
      className={cn(
        'container',
        props.fluid && 'container__fluid',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default UIContainer;

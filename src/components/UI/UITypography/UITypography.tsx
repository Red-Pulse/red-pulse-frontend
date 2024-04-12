import React from 'react';
import { typographyValues } from '../typography.ts';

interface TypographyProps {
  typography: keyof typeof typographyValues;
  color: string;
  children: React.ReactNode
}

const UITypography: React.FC<TypographyProps> = ({typography, color ,children}) => {
  const typographyValue = typographyValues[typography];
  return (
    <div
      style={{
        fontFamily: 'Roboto',
        fontSize: typographyValue.fontSize,
        fontWeight:typographyValue.lineHeight,
        color,
      }}
    >
      {children}
    </div>
  );
};

export default UITypography;

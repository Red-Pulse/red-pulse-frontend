import React from 'react';
import { typographyValues } from './typography.ts';
import { colors } from 'assets/colors.ts';

interface TypographyProps {
  typography: keyof typeof typographyValues;
  color?: keyof typeof colors;
  children: React.ReactNode;
}

const UITypography: React.FC<TypographyProps> = ({
  typography,
  color = 'textBlack100',
  children,
}) => {
  const typographyValue = typographyValues[typography];
  return (
    <div
      style={{
        fontFamily: 'Roboto',
        fontSize: typographyValue.fontSize,
        fontWeight: typographyValue.lineHeight,
        color: colors[color],
      }}
    >
      {children}
    </div>
  );
};

export default UITypography;

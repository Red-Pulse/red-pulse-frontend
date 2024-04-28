import React from 'react';
import { typographyValues } from './typography.ts';
import { colors } from 'assets/colors.ts';

interface TypographyProps {
  typography: keyof typeof typographyValues;
  fontWeight: 400 | 500 | 600 | 700 | 800;
  color?: keyof typeof colors;
  className?: string;
  children: React.ReactNode;
}

const UITypography: React.FC<TypographyProps> = ({
  typography,
  fontWeight,
  color = 'textBlack100',
  className,
  children,
}) => {
  const typographyValue = typographyValues[typography];
  return (
    <div
      className={className}
      style={{
        fontFamily: 'Roboto',
        fontSize: typographyValue.fontSize,
        lineHeight: typographyValue.lineHeight,
        color: colors[color],
        fontWeight: fontWeight,
      }}
    >
      {children}
    </div>
  );
};

export default UITypography;

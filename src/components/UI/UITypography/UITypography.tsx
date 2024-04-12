import React from 'react';
import { Typography } from '../typography.ts'

interface TypographyProps {
  typography: Typography;
  color: string;
  children: React.ReactNode
}

const UITypography: React.FC<TypographyProps> = ({typography, color ,children}) => {
  const { fontSize, lineHeight } = getTypographyValues(typography);

  return (
    <div
      style={{
        fontFamily: 'Roboto',
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`,
        color,
      }}
    >
      {children}
    </div>
  );
};

const getTypographyValues = (typography: Typography) => {
  switch (typography) {
    case 'text_fz56_lh72':
      return { fontSize: 56, lineHeight: 72 };
    case 'text_fz36_lh47':
      return { fontSize: 36, lineHeight: 47 };
    case 'text_fz24_lh29':
      return { fontSize: 24, lineHeight: 29 };
    case 'text_fz20_lh24':
      return { fontSize: 20, lineHeight: 24 };
    case 'text_fz20_lh32':
      return { fontSize: 20, lineHeight: 32 };
    case 'text_fz18_lh21':
      return { fontSize: 18, lineHeight: 21 };
    case 'text_fz18_lh30':
      return { fontSize: 18, lineHeight: 30 };
    case 'text_fz16_lh20':
      return { fontSize: 16, lineHeight: 20 };
    case 'text_fz16_lh24':
      return { fontSize: 16, lineHeight: 24 };
    case 'text_fz15_lh18':
      return { fontSize: 15, lineHeight: 18 };
    case 'text_fz14_lh17':
      return { fontSize: 14, lineHeight: 17 };
    case 'text_fz14_lh23':
      return { fontSize: 14, lineHeight: 23 };
    case 'text_fz13_lh15':
      return { fontSize: 13, lineHeight: 15 };
    default:
      return { fontSize: 16, lineHeight: 20 };
  }
};

export default UITypography;

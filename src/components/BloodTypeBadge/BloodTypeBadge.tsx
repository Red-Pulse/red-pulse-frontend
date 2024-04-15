import React from 'react';
import { BloodTypeEnum } from './data.ts';
import './BloodTypeBadge.scss';
import UITypography from '../UI/UITypography';
import { colors } from '../../assets/colors.ts';

interface BloodTypeBadgeProps {
  variant: 'red' | 'green';
  bloodType: BloodTypeEnum;
}

const BloodTypeBadge: React.FC<BloodTypeBadgeProps> = ({
  variant,
  bloodType,
}) => {
  const {
    bloodTypeRedBorder,
    bloodTypeGreenBorder,
    bloodTypeRedBackground,
    bloodTypeGreenBackground,
  } = colors;

  const borderColor =
    variant === 'red' ? bloodTypeRedBorder : bloodTypeGreenBorder;
  const backgroundColor =
    variant === 'red' ? bloodTypeRedBackground : bloodTypeGreenBackground;

  return (
    <div
      className="blood-type-badge"
      style={{ border: `1px solid ${borderColor}`, backgroundColor }}
    >
      <UITypography
        typography="text_fz20_lh24"
        color={
          variant === 'red' ? 'bloodTypeRedBorder' : 'bloodTypeGreenBorder'
        }
      >
        {bloodType}
      </UITypography>
    </div>
  );
};

export default BloodTypeBadge;

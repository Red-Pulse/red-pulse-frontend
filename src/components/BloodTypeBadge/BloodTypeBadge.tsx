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
  const isRedVariant = variant === 'red';
  const {
    bloodTypeRedBorder,
    bloodTypeGreenBorder,
    bloodTypeRedBackground,
    bloodTypeGreenBackground,
  } = colors;

  const borderColor = isRedVariant ? bloodTypeRedBorder : bloodTypeGreenBorder;
  const backgroundColor = isRedVariant
    ? bloodTypeRedBackground
    : bloodTypeGreenBackground;

  return (
    <div
      className="blood-type-badge"
      style={{ border: `1px solid ${borderColor}`, backgroundColor }}
    >
      <UITypography
        typography="text_fz20_lh24"
        color={isRedVariant ? 'bloodTypeRedBorder' : 'bloodTypeGreenBorder'}
        fontWeight={400}
      >
        {bloodType}
      </UITypography>
    </div>
  );
};

export default BloodTypeBadge;

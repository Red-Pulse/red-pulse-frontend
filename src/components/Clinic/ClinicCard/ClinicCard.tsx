import React from 'react';
import UITypography from '../../UI/UITypography';
import BloodTypeBadge from '../../BloodTypeBadge';
import { BloodTypeEnum } from '../../BloodTypeBadge/data.ts';
import './ClinicCard.scss';
import '../../../assets/colors.ts';
import UIButton from '../../UI/UIButton';

interface ClinicInfoProps {
  name: string;
  address: string;
}

const ClinicCard: React.FC<{ clinicInfo: ClinicInfoProps }> = ({
  clinicInfo: { name, address },
}) => {
  const imagesPath = [
    {
      src: 'https://w7.pngwing.com/pngs/178/419/png-transparent-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-face-thumbnail.png',
    },
    {
      src: 'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png',
    },
    {
      src: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
    },
  ];
  return (
    <div className="clinic-card">
      <UITypography
        className={'clinic-card__title'}
        typography="text_fz32_ln37"
        color="textBrown100"
        fontWeight={400}
      >
        {name}
      </UITypography>

      <UITypography
        className={'clinic-card__subtitle'}
        typography="text_fz18_lh21"
        color="textGray100"
        fontWeight={400}
      >
        {address}
      </UITypography>

      <div className={'clinic-card__states'}>
        <UITypography
          className={'clinic-card__states-red'}
          typography="text_fz16_lh24"
          color="textGray75"
          fontWeight={400}
        >
          Требуется
        </UITypography>
        <UITypography
          className={'clinic-card__states-green'}
          typography="text_fz16_lh24"
          color="textGray75"
          fontWeight={400}
        >
          Достаточно
        </UITypography>
      </div>
      <div className={'clinic-card__badges'}>
        <div className="row">
          <BloodTypeBadge
            variant="green"
            bloodType={BloodTypeEnum.Positive_0}
          />
          <BloodTypeBadge variant="red" bloodType={BloodTypeEnum.Positive_A} />
          <BloodTypeBadge
            variant="green"
            bloodType={BloodTypeEnum.Positive_B}
          />
          <BloodTypeBadge variant="red" bloodType={BloodTypeEnum.Positive_AB} />
        </div>
        <div className="row">
          <BloodTypeBadge
            variant="green"
            bloodType={BloodTypeEnum.Negative_0}
          />
          <BloodTypeBadge
            variant="green"
            bloodType={BloodTypeEnum.Negative_A}
          />
          <BloodTypeBadge variant="red" bloodType={BloodTypeEnum.Negative_B} />
          <BloodTypeBadge variant="red" bloodType={BloodTypeEnum.Negative_AB} />
        </div>
      </div>
      <UIButton
        variant="primary"
        size="large"
        style={{
          width: '100%',
          borderRadius: '20px',
        }}
      >
        <UITypography
          typography="text_fz16_lh24"
          color="white"
          fontWeight={400}
        >
          Присоединиться
        </UITypography>
      </UIButton>
      <div className="clinic-card__footer">
        <UITypography
          className="clinic-card__footer-text"
          typography="text_fz16_lh24"
          fontWeight={400}
          color="textGray75"
        >
          Азиз, Ислам и еще 2484 донора запланировали сдать кровь здесь
        </UITypography>
        <div className="clinic-card__footer-photos">
          {imagesPath.map((img, index) => (
            <img
              src={img.src}
              alt="image"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '1px solid white',
                position: 'relative',
                left: index * -10,
                zIndex: imagesPath.length - index,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicCard;

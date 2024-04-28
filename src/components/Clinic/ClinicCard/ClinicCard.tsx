import { FC } from 'react';
import UITypography from '../../UI/UITypography';
import BloodTypeBadge from '../../BloodTypeBadge';
import './ClinicCard.scss';
import '../../../assets/colors.ts';
import UIButton from '../../UI/UIButton';
import { bloodTypes } from '../../../data.ts';
import { ApiClinic } from '../../../store/clinics/models.ts';

interface ClinicCardProps {
  clinic: ApiClinic;
}

const ClinicCard: FC<ClinicCardProps> = (props) => {
  return (
    <div className="clinic-card">
      <UITypography
        className={'clinic-card__title'}
        typography="text_fz32_ln37"
        color="textBrown100"
        fontWeight={400}
      >
        {props.clinic.name}
      </UITypography>

      <UITypography
        className={'clinic-card__subtitle'}
        typography="text_fz18_lh21"
        color="textGray100"
        fontWeight={400}
      >
        {props.clinic.address}
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
        {bloodTypes.map((bloodType) => {
          const isNeed = props.clinic.need_bloods.find(
            (needBlood) => needBlood.type === bloodType.type
          );

          return (
            <BloodTypeBadge
              variant={isNeed ? 'red' : 'green'}
              bloodType={bloodType}
            />
          );
        })}
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
        {/*<div className="clinic-card__footer-photos">*/}
        {/*  {imagesPath.map((img, index) => (*/}
        {/*    <img*/}
        {/*      src={img.src}*/}
        {/*      alt="image"*/}
        {/*      style={{*/}
        {/*        width: '50px',*/}
        {/*        height: '50px',*/}
        {/*        borderRadius: '50%',*/}
        {/*        border: '1px solid white',*/}
        {/*        position: 'relative',*/}
        {/*        left: index * -10,*/}
        {/*        zIndex: imagesPath.length - index,*/}
        {/*      }}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default ClinicCard;

import { FC } from 'react';
import UITypography from '../../UI/UITypography';
import BloodTypeBadge from '../../BloodTypeBadge';
import './ClinicCard.scss';
import '../../../assets/colors.ts';
import UIButton from '../../UI/UIButton';
import { bloodTypes } from '../../../data.ts';
import { ApiClinic } from '../../../store/clinics/models.ts';
import store from '../../../store';

interface ClinicCardProps {
  clinic: ApiClinic;
  handlePressJoin: (clinic: ApiClinic) => void;
  handlePressDisconnect: (clinic: ApiClinic) => void;
}

const ClinicCard: FC<ClinicCardProps> = (props) => {
  const isJoined = !!props.clinic.users.find(
    (user) => user.id === store.auth.user?.id
  );

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
          Need bloods
        </UITypography>
        <UITypography
          className={'clinic-card__states-green'}
          typography="text_fz16_lh24"
          color="textGray75"
          fontWeight={400}
        >
          Enough bloods
        </UITypography>
      </div>
      <div className={'clinic-card__badges'}>
        {bloodTypes.map((bloodType) => {
          const isNeed = props.clinic.needBloods.find(
            (needBlood) => needBlood.id === bloodType.id
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
        onClick={() =>
          isJoined
            ? props.handlePressDisconnect(props.clinic)
            : props.handlePressJoin(props.clinic)
        }
      >
        <UITypography
          typography="text_fz16_lh24"
          color="white"
          fontWeight={400}
        >
          {isJoined ? 'Disconnect' : 'Join to be donor'}
        </UITypography>
      </UIButton>
      <div className="clinic-card__footer">
        <UITypography
          className="clinic-card__footer-text"
          typography="text_fz16_lh24"
          fontWeight={400}
          color="textGray75"
        >
          {props.clinic.users.length > 3
            ? `${props.clinic.users.map((user) => user.firstName).join(', ')} and ${props.clinic.users.length - 2} other donors have planned to donate blood here.`
            : props.clinic.users.length
              ? `${props.clinic.users.map((user) => user.firstName).join(', ')} have planned to donate blood here.`
              : ''}
        </UITypography>
        <div className="clinic-card__footer-photos">
          {props.clinic.users.map((user, index) => (
            <img
              src={user.photo}
              alt="image"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '1px solid white',
                position: 'relative',
                left: index * -10,
                zIndex: props.clinic.users.length - index,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicCard;

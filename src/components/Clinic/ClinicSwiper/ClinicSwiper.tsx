import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ClinicCard from '../ClinicCard';
import { Navigation } from 'swiper/modules';
import './ClinicSwiper.scss';
import { FC, useRef } from 'react';
import { ApiClinic } from '../../../store/clinics/models.ts';
import UIContainer from '../../UI/UIContainer';
import AuthModal from '../../Modals/AuthModal';
import { AuthModalRef } from '../../Modals/AuthModal/AuthModal.tsx';
import store from '../../../store';

interface ClinicSwiperProps {
  clinics: ApiClinic[];
}

const ClinicSwiper: FC<ClinicSwiperProps> = (props) => {
  const authModalRef = useRef<AuthModalRef>(null);

  const handleJoin = async (clinic: ApiClinic) => {
    if (!store.auth.isAuthenticated || !store.auth.user) {
      authModalRef.current?.open('login');
      return;
    }

    await store.clinics.joinToBeDonor(clinic.id, store.auth.user.id);
  };

  const handleDisconnect = async (clinic: ApiClinic) => {
    await store.clinics.disconnect(clinic.id, store.auth.user?.id!);
  };

  return (
    <div className="clinics">
      <UIContainer fluid>
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          navigation={true}
          modules={[Navigation]}
        >
          {props.clinics.map((clinic, index) => (
            <SwiperSlide key={index}>
              <ClinicCard
                clinic={clinic}
                handlePressJoin={handleJoin}
                handlePressDisconnect={handleDisconnect}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide />
        </Swiper>
      </UIContainer>
      <AuthModal ref={authModalRef} />
    </div>
  );
};

export default ClinicSwiper;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ClinicCard from '../ClinicCard';
import { Navigation } from 'swiper/modules';
import './ClinicSwiper.scss';
import { FC } from 'react';
import { ApiClinic } from '../../../store/clinics/models.ts';
import UIContainer from '../../UI/UIContainer';

interface ClinicSwiperProps {
  clinics: ApiClinic[];
}

const ClinicSwiper: FC<ClinicSwiperProps> = (props) => {
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
              <ClinicCard clinic={clinic} />
            </SwiperSlide>
          ))}
          <SwiperSlide />
        </Swiper>
      </UIContainer>
    </div>
  );
};

export default ClinicSwiper;

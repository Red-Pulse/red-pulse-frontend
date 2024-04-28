import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ClinicCard from '../ClinicCard';
import { Navigation } from 'swiper/modules';
import './ClinicSwiper.scss';
import { ApiClinic } from '../../../data.ts';
import { FC } from 'react';

interface ClinicSwiperProps {
  clinics: ApiClinic[];
}

const ClinicSwiper: FC<ClinicSwiperProps> = (props) => {
  return (
    <Swiper
      spaceBetween={80}
      slidesPerView={3}
      navigation={true}
      modules={[Navigation]}
    >
      {props.clinics.map((clinic, index) => (
        <SwiperSlide key={index}>
          <ClinicCard clinic={clinic} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClinicSwiper;

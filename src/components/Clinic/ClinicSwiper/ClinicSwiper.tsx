import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ClinicCard from '../ClinicCard';
import { Navigation } from 'swiper/modules';
import './ClinicSwiper.scss';

const ClinicSwiper = () => {
  const clinicInfo = [
    {
      name: 'Городская больница №7 имени Аль-Фергани',
      address: 'Ташкент, ул. Бухара, д. 32',
    },
    {
      name: 'Медицинский центр "Семейный доктор"',
      address: 'Ташкент, ул. Чиланзар, д. 87',
    },
    {
      name: 'Онкологический центр имени Академика Лукашиной',
      address: 'Ташкент, ул. Сибирский тракт, д. 112',
    },
    {
      name: 'Стоматологическая клиника "Улыбка"',
      address: 'Ташкент, ул. Абая, д. 5',
    },
    {
      name: 'Многопрофильный медицинский центр "Эксперт-Мед"',
      address: 'Ташкент, ул. Якуба Коласа, д. 19',
    },
    {
      name: 'Центр здоровья "Здоровый день"',
      address: 'Ташкент, ул. Садовая, д. 15',
    },
    {
      name: 'Детская клиника "Солнечный день"',
      address: 'Ташкент, ул. Ленина, д. 50',
    },
    {
      name: 'Поликлиника "Забота о здоровье"',
      address: 'Ташкент, ул. Мира, д. 102',
    },
    {
      name: 'Станция переливания крови "Кроваточка"',
      address: 'Ташкент, проспект Узбекистана, д. 77',
    },
    {
      name: 'Реабилитационный центр "Восстановление"',
      address: 'Ташкент, ул. Гагарина, д. 3',
    },
  ];

  return (
    <Swiper
      spaceBetween={80}
      slidesPerView={3}
      navigation={true}
      modules={[Navigation]}
    >
      {clinicInfo.map((clinic, index) => (
        <SwiperSlide key={index}>
          <ClinicCard clinicInfo={clinic} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClinicSwiper;

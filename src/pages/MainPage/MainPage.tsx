import { FC, useEffect } from 'react';
import ClinicSwiper from '../../components/Clinic/ClinicSwiper';
import { observer } from 'mobx-react';
import store from '../../store';
import Layout from '../../components/Layout/Layout.tsx';
import banner from 'assets/img/banner.png'
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './MainPage.scss'
import UIContainer from '../../components/UI/UIContainer';
import UITypography from '../../components/UI/UITypography';
const MainPage: FC = () => {
  useEffect(() => {
    store.clinics.fetchClinics();
  }, []);

  const texts = [
    'Your contribution to blood donation is priceless!',
    'Blood unites us all. Share your life, donate blood!',
    'Donation is an act of solidarity!',
    'Give blood, give life!',
    'Be a hero, donate blood!',
    'Every drop counts. Donate blood today!',
  ];
  return (
    <Layout>
      <div className="banner">
        <UIContainer className="banner__container">
          <div className="banner__swiper">
            <Swiper
              effect={'fade'}
              modules={[EffectFade, Autoplay]}
              autoplay={{ delay: 2000 }}
              className="mySwiper"
            >
              {texts.map(text => (
                <SwiperSlide>
                  <UITypography color='black' className='banner__text' typography='text_fz50_lh60' fontWeight={500}>{text}</UITypography>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="banner__image">
            <img src={banner} alt="banner" />
          </div>
        </UIContainer>
      </div>
      {!store.auth.isClinic && <ClinicSwiper clinics={store.clinics.clinics} />}
    </Layout>
  );
};

export default observer(MainPage);

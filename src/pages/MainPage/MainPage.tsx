import { FC } from 'react';
import ClinicSwiper from '../../components/Clinic/ClinicSwiper';
import { clinics } from '../../data.ts';
import { observer } from 'mobx-react';
import Header from '../../components/Header/Header.tsx';

const MainPage: FC = () => {
  return (
    <div>
      <Header />
      <ClinicSwiper clinics={clinics} />
    </div>
  );
};

export default observer(MainPage);

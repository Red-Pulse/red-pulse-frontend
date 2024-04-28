import { FC, useEffect } from 'react';
import ClinicSwiper from '../../components/Clinic/ClinicSwiper';
import { observer } from 'mobx-react';
import Header from '../../components/Header/Header.tsx';
import store from '../../store';

const MainPage: FC = () => {
  useEffect(() => {
    store.clinics.fetchClinics();
  }, []);

  return (
    <div>
      <Header />
      {!store.auth.isClinic && <ClinicSwiper clinics={store.clinics.clinics} />}
    </div>
  );
};

export default observer(MainPage);

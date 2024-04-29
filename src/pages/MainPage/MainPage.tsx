import { FC, useEffect } from 'react';
import ClinicSwiper from '../../components/Clinic/ClinicSwiper';
import { observer } from 'mobx-react';
import store from '../../store';
import Layout from '../../components/Layout/Layout.tsx';

const MainPage: FC = () => {
  useEffect(() => {
    store.clinics.fetchClinics();
  }, []);

  return (
    <Layout>
      {!store.auth.isClinic && <ClinicSwiper clinics={store.clinics.clinics} />}
    </Layout>
  );
};

export default observer(MainPage);

import UITypography from 'components/UI/UITypography';
import UIButton from 'components/UI/UIButton';
import ClinicSwiper from './components/Clinic/ClinicSwiper';
import { clinics } from './data.ts';

function App() {
  return (
    <div>
      <UITypography typography="text_fz56_lh72" color="red" fontWeight={400}>
        Hello
      </UITypography>
      <UIButton size="small">Login</UIButton>
      <UIButton size="medium" variant="primary">
        Login
      </UIButton>
      <UIButton size="large" disabled>
        Login
      </UIButton>
      <ClinicSwiper clinics={clinics} />
    </div>
  );
}

export default App;

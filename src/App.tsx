import UITypography from 'components/UI/UITypography';
import UIButton from 'components/UI/UIButton';
import BloodTypeBadge from './components/BloodTypeBadge/BloodTypeBadge.tsx';
import { BloodTypeEnum } from './components/BloodTypeBadge/data.ts';

function App() {
  return (
    <div>
      <UITypography typography="text_fz56_lh72" color="red">
        Hello
      </UITypography>
      <UIButton size="small">Login</UIButton>
      <UIButton size="medium" variant="primary">
        Login
      </UIButton>
      <UIButton size="large" disabled>
        Login
      </UIButton>
      <div
        style={{
          display: 'flex',
        }}
      >
        <BloodTypeBadge variant={'red'} bloodType={BloodTypeEnum.Positive_0} />
        <BloodTypeBadge variant={'red'} bloodType={BloodTypeEnum.Positive_A} />
        <BloodTypeBadge
          variant={'green'}
          bloodType={BloodTypeEnum.Positive_B}
        />
        <BloodTypeBadge variant={'red'} bloodType={BloodTypeEnum.Positive_AB} />
        <BloodTypeBadge variant={'red'} bloodType={BloodTypeEnum.Negative_0} />
        <BloodTypeBadge
          variant={'green'}
          bloodType={BloodTypeEnum.Negative_A}
        />
        <BloodTypeBadge variant={'red'} bloodType={BloodTypeEnum.Negative_B} />
        <BloodTypeBadge variant={'red'} bloodType={BloodTypeEnum.Negative_AB} />
      </div>
    </div>
  );
}

export default App;

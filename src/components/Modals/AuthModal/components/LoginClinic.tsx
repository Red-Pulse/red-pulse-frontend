import { FC, useState } from 'react';
import store from '../../../../store';
import { TextField } from '@mui/material';
import UIButton from '../../../UI/UIButton';

interface LoginClinicProps {
  closeModal: () => void;
}

const LoginClinic: FC<LoginClinicProps> = (props) => {
  const [inn, setInn] = useState({
    value: '',
    error: '',
  });
  const [password, setPassword] = useState({
    value: '',
    error: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await store.auth.loginClinic({
      inn: Number(inn.value),
      password: password.value,
    });

    if (store.auth.loginError) {
      setPassword((prevState) => ({ ...prevState, error: 'Wrong password' }));
    } else {
      props.closeModal();
    }
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
      onSubmit={handleSubmit}
    >
      <TextField
        required
        value={inn.value}
        label="Clinic INN"
        fullWidth
        onChange={(v) => setInn({ value: v.currentTarget.value, error: '' })}
      />
      <TextField
        required
        value={password.value}
        label="Password"
        type="password"
        fullWidth
        helperText={password.error}
        error={!!password.error}
        onChange={(v) =>
          setPassword({ value: v.currentTarget.value, error: '' })
        }
      />
      <UIButton
        variant="primary"
        size="large"
        type="submit"
        style={{ height: 48 }}
      >
        Login
      </UIButton>
    </form>
  );
};

export default LoginClinic;

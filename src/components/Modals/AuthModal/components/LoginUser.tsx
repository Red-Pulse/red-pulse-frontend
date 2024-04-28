import { TextField } from '@mui/material';
import UIButton from '../../../UI/UIButton';
import { FC, useState } from 'react';
import store from '../../../../store';

interface LoginUserProps {
  closeModal: () => void;
}

const LoginUser: FC<LoginUserProps> = (props) => {
  const [phone, setPhone] = useState({
    value: '',
    error: '',
  });
  const [password, setPassword] = useState({
    value: '',
    error: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await store.auth.loginUser({
      phone: phone.value.replace('+', ''),
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
        value={phone.value}
        label="Phone number"
        fullWidth
        placeholder="+"
        onChange={(v) => setPhone({ value: v.currentTarget.value, error: '' })}
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

export default LoginUser;

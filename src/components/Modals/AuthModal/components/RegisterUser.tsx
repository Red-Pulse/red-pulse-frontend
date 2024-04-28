import { FC, useState } from 'react';
import { TextField } from '@mui/material';
import UIButton from '../../../UI/UIButton';
import store from '../../../../store';
import { Autocomplete } from '@mui/lab';
import { observer } from 'mobx-react';
import { ApiBloodType } from '../../../../store/bloodTypes/models.ts';

interface RegisterUserProps {
  closeModal: () => void;
}

const RegisterUser: FC<RegisterUserProps> = (props) => {
  const [firstName, setFirstName] = useState({
    value: '',
    error: '',
  });
  const [lastName, setLastName] = useState({
    value: '',
    error: '',
  });
  const [phone, setPhone] = useState({
    value: '',
    error: '',
  });
  const [password, setPassword] = useState({
    value: '',
    error: '',
  });
  const [bloodType, setBloodType] = useState<ApiBloodType | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await store.auth.registerUser({
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      password: password.value,
      bloodTypeId: bloodType?.id!,
    });

    props.closeModal();
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
      onSubmit={handleSubmit}
    >
      <TextField
        required
        value={firstName.value}
        label="First Name"
        fullWidth
        onChange={(v) =>
          setFirstName({ value: v.currentTarget.value, error: '' })
        }
      />
      <TextField
        required
        value={lastName.value}
        label="Last Name"
        fullWidth
        onChange={(v) =>
          setLastName({ value: v.currentTarget.value, error: '' })
        }
      />
      <TextField
        required
        value={phone.value}
        label="Phone Number"
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
      <Autocomplete
        fullWidth
        disablePortal
        value={bloodType}
        options={store.bloodTypes.bloodTypes}
        getOptionLabel={(option) => option.longName}
        onChange={(_, v) => setBloodType(v)}
        renderInput={(params) => (
          <TextField {...params} label="Blood Type" required />
        )}
      />
      <UIButton
        variant="primary"
        size="large"
        type="submit"
        style={{ height: 48 }}
      >
        Register
      </UIButton>
    </form>
  );
};

export default observer(RegisterUser);

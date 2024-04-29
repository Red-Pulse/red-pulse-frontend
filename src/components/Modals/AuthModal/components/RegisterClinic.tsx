import { FC, useState } from 'react';
import { ApiBloodType } from '../../../../store/bloodTypes/models.ts';
import store from '../../../../store';
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/lab';
import UIButton from '../../../UI/UIButton';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useNavigate } from 'react-router-dom';

interface RegisterClinicProps {
  closeModal: () => void;
}

const RegisterClinic: FC<RegisterClinicProps> = (props) => {
  const navigate = useNavigate();

  const [inn, setInn] = useState({
    value: '',
    error: '',
  });
  const [password, setPassword] = useState({
    value: '',
    error: '',
  });
  const [name, setName] = useState({
    value: '',
    error: '',
  });
  const [address, setAddress] = useState({
    value: '',
    error: '',
  });
  const [needBloodTypes, setNeedBloodTypes] = useState<ApiBloodType[]>([]);

  const [selectedPoint, setSelectedPoint] = useState({
    latitude: 41.32827010257417,
    longitude: 69.42727813962622,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      selectedPoint.latitude === 41.32827010257417 ||
      selectedPoint.longitude === 69.42727813962622
    ) {
      return alert('Select building on location');
    }

    await store.auth.registerClinic({
      inn: +inn.value,
      longitude: selectedPoint.longitude,
      latitude: selectedPoint.latitude,
      address: address.value,
      name: name.value,
      password: password.value,
      needBloods: needBloodTypes.map((needBloodType) => needBloodType.id),
    });

    props.closeModal();
    navigate('/profile');
  };

  const handleMapClick = (e) => {
    const [latitude, longitude] = e.get('coords');

    setSelectedPoint({ latitude, longitude });
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
      onSubmit={handleSubmit}
    >
      <TextField
        required
        value={inn.value}
        label="Inn"
        type="number"
        fullWidth
        onChange={(v) => setInn({ value: v.currentTarget.value, error: '' })}
      />
      <TextField
        required
        value={name.value}
        label="Clinic Name"
        fullWidth
        onChange={(v) => setName({ value: v.currentTarget.value, error: '' })}
      />
      <TextField
        required
        value={password.value}
        label="Password"
        type="password"
        fullWidth
        onChange={(v) =>
          setPassword({ value: v.currentTarget.value, error: '' })
        }
      />
      <TextField
        required
        value={address.value}
        label="Address Name"
        fullWidth
        onChange={(v) =>
          setAddress({ value: v.currentTarget.value, error: '' })
        }
      />
      <YMaps>
        <Map
          defaultState={{
            center: [selectedPoint.latitude, selectedPoint.longitude],
            zoom: 13,
          }}
          onClick={handleMapClick}
          style={{ width: '100%', height: '200px' }}
        >
          <Placemark
            geometry={[selectedPoint.latitude, selectedPoint.longitude]}
          />
        </Map>
      </YMaps>
      <Autocomplete
        fullWidth
        disablePortal
        value={needBloodTypes}
        options={store.bloodTypes.bloodTypes}
        getOptionLabel={(option) => option.longName}
        onChange={(_, v) => setNeedBloodTypes(v)}
        renderInput={(params) => <TextField {...params} label="Need Bloods" />}
        multiple
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

export default RegisterClinic;

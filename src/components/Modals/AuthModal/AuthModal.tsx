import {
  forwardRef,
  SyntheticEvent,
  useImperativeHandle,
  useState,
} from 'react';
import { Modal } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './AuthModal.scss';
import RegisterClinic from './components/RegisterClinic.tsx';
import LoginClinic from './components/LoginClinic.tsx';
import RegisterUser from './components/RegisterUser.tsx';
import LoginUser from './components/LoginUser.tsx';

export interface AuthModalRef {
  open: (authType: 'register' | 'login') => void;
  close: () => void;
}

interface AuthModalProps {}

const AuthModal = forwardRef<AuthModalRef, AuthModalProps>((_, ref) => {
  const [open, setOpen] = useState(false);

  const [authType, setAuthType] = useState('login');
  const [activeTab, setActiveTab] = useState('user');

  useImperativeHandle(
    ref,
    () => ({
      open: (type) => {
        setAuthType(type);
        setOpen(true);
      },
      close: () => handleClose(),
    }),
    []
  );

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeTab = (_: SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="auth-modal">
        <TabContext value={activeTab}>
          <TabList
            onChange={handleChangeTab}
            centered
            classes={{ indicator: 'auth-modal__tab-indicator' }}
          >
            <Tab
              label="Clinic"
              value="clinic"
              classes={{ root: 'auth-modal__tab' }}
            />
            <Tab
              label="User"
              value="user"
              classes={{ root: 'auth-modal__tab' }}
            />
          </TabList>
          <TabPanel
            value="clinic"
            classes={{ root: 'auth-modal__tab-content' }}
          >
            {authType === 'register' ? (
              <RegisterClinic />
            ) : (
              <LoginClinic closeModal={handleClose} />
            )}
          </TabPanel>
          <TabPanel value="user" classes={{ root: 'auth-modal__tab-content' }}>
            {authType === 'register' ? (
              <RegisterUser />
            ) : (
              <LoginUser closeModal={handleClose} />
            )}
          </TabPanel>
        </TabContext>
      </div>
    </Modal>
  );
});

export default AuthModal;

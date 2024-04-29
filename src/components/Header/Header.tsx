import { FC, useMemo, useRef } from 'react';
import logo from '../../assets/img/logo.png';
import UIContainer from '../UI/UIContainer';
import './Header.scss';
import UIButton from '../UI/UIButton';
import AuthModal, { AuthModalRef } from '../Modals/AuthModal/AuthModal.tsx';
import { observer } from 'mobx-react';
import store from '../../store';
import UITypography from '../UI/UITypography';
import { Link, useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const navigate = useNavigate();

  const authModalRef = useRef<AuthModalRef>(null);

  const renderPersonalData = useMemo(() => {
    const isUser = !!store.auth.user && !store.auth.clinic;

    return (
      <div className="header__profile-wrapper">
        {isUser
          ? store.auth.user && (
              <div className="header__profile">
                <img
                  className="header__profile-photo"
                  src={store.auth.user.photo}
                  alt="user photo"
                />
                <Link to="/profile">
                  <UITypography typography="text_fz16_lh20" fontWeight={500}>
                    {store.auth.user.lastName} {store.auth.user.firstName}
                  </UITypography>
                  <UITypography typography="text_fz14_lh17" fontWeight={400}>
                    Blood Type: {store.auth.user.bloodType.shortName}
                  </UITypography>
                </Link>
              </div>
            )
          : store.auth.clinic && (
              <Link to="/profile">
                <UITypography typography="text_fz16_lh20" fontWeight={500}>
                  {store.auth.clinic.name}
                </UITypography>
                <UITypography typography="text_fz14_lh17" fontWeight={400}>
                  INN: <i>{store.auth.clinic.inn}</i>
                </UITypography>
              </Link>
            )}
        <UIButton
          variant="primary"
          size="large"
          onClick={() => {
            store.auth.logout();
            navigate('/');
          }}
        >
          Logout
        </UIButton>
      </div>
    );
  }, [store.auth.user, store.auth.clinic]);

  return (
    <header className="header">
      <UIContainer className="header__container">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        {store.auth.isAuthenticated ? (
          renderPersonalData
        ) : (
          <div className="header__actions">
            <UIButton
              variant="primary"
              size="large"
              onClick={() => authModalRef.current?.open('register')}
            >
              Register
            </UIButton>
            <UIButton
              variant="primary"
              size="large"
              onClick={() => authModalRef.current?.open('login')}
            >
              Login
            </UIButton>
          </div>
        )}
      </UIContainer>
      <AuthModal ref={authModalRef} />
    </header>
  );
};

export default observer(Header);

import Layout from '../../components/Layout/Layout.tsx';
import UIContainer from '../../components/UI/UIContainer';
import store from '../../store';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.scss';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import BloodTypeBadge from '../../components/BloodTypeBadge';
import { observer } from 'mobx-react';

const ProfilePage = () => {
  const navigate = useNavigate();

  if (!store.auth.isAuthenticated) {
    navigate('/');
  }

  const renderUserProfile = () => {
    if (!store.auth.user) {
      return null;
    }

    return (
      <div className="profile__card">
        <img
          src={store.auth.user.photo}
          className="profile__card-photo"
          alt="user photo"
        />
        <div className="profile__card-content">
          <div className="profile__card-info">
            <b>ID: </b>
            <span>{store.auth.user.id}</span>
          </div>
          <div className="profile__card-info">
            <b>Full Name: </b>
            <span>
              {store.auth.user.lastName} {store.auth.user.firstName}
            </span>
          </div>
          <div className="profile__card-info">
            <b>Phone: </b>
            <span>+{store.auth.user.phone}</span>
          </div>
          <div className="profile__card-info">
            <b>Blood type: </b>
            <span>
              {store.auth.user.bloodType.longName} (
              {store.auth.user.bloodType.shortName})
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderClinicProfile = () => {
    if (!store.auth.clinic) {
      return null;
    }

    return (
      <div>
        <div className="profile__card">
          <YMaps>
            <Map
              defaultState={{
                center: [
                  +store.auth.clinic.latitude,
                  +store.auth.clinic.longitude,
                ],
                zoom: 13,
              }}
              style={{ width: '500px', height: '400px' }}
            >
              <Placemark
                geometry={[
                  +store.auth.clinic.latitude,
                  +store.auth.clinic.longitude,
                ]}
              />
            </Map>
          </YMaps>
          <div className="profile__card-content">
            <div className="profile__card-info">
              <b>ID: </b>
              <span>{store.auth.clinic.id}</span>
            </div>
            <div className="profile__card-info">
              <b>INN: </b>
              <span>{store.auth.clinic.inn}</span>
            </div>
            <div className="profile__card-info">
              <b>Clinic Name: </b>
              <span>{store.auth.clinic.name}</span>
            </div>
            <div className="profile__card-info">
              <b>Clinic Address: </b>
              <span>{store.auth.clinic.address}</span>
            </div>
            <b>Need bloods: </b>
            <div className={'profile__card-badges'}>
              {store.bloodTypes.bloodTypes.map((bloodType) => {
                const isNeed = store.auth.clinic?.needBloods.find(
                  (needBlood) => needBlood.id === bloodType.id
                );

                return (
                  <BloodTypeBadge
                    variant={isNeed ? 'red' : 'green'}
                    bloodType={bloodType}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {!!store.auth.clinic?.users.length && (
          <div>
            <h3 className="users-list__title">Users</h3>
            <div className="users-list">
              {store.auth.clinic.users.map((user) => (
                <div className="user">
                  <img
                    width={128}
                    height={128}
                    src={user.photo}
                    alt="Photo"
                    className="user__photo"
                  />

                  <div>
                    <div>
                      <b>Full Name: </b>
                      <span>
                        {user.lastName} {user.firstName}
                      </span>
                    </div>

                    <div>
                      <b>Phone: </b>
                      <span>+{user.phone}</span>
                    </div>

                    <div>
                      <b>Blood Type: </b>
                      <span>
                        {user.bloodType.longName} ({user.bloodType.shortName})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Layout>
      <UIContainer>
        {store.auth.isClinic && renderClinicProfile()}
        {store.auth.isUser && renderUserProfile()}
      </UIContainer>
    </Layout>
  );
};

export default observer(ProfilePage);

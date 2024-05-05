import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.tsx';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import store from '../../store';
import BloodTypeBadge from '../../components/BloodTypeBadge/BloodTypeBadge.tsx';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import UIContainer from '../../components/UI/UIContainer';

const ClinicPage = () => {
  const params = useParams<{ id: string }>();

  useEffect(() => {
    if (!params.id) {
      return;
    }

    store.clinics.fetchClinic(+params.id);
  }, [params.id]);

  if (!store.clinics.currentClinic) {
    return <></>;
  }

  return (
    <Layout>
      <UIContainer>
        <div className="profile__card">
          <YMaps>
            <Map
              defaultState={{
                center: [
                  +store.clinics.currentClinic.latitude,
                  +store.clinics.currentClinic.longitude,
                ],
                zoom: 13,
              }}
              style={{ width: '500px', height: '400px' }}
            >
              <Placemark
                geometry={[
                  +store.clinics.currentClinic.latitude,
                  +store.clinics.currentClinic.longitude,
                ]}
              />
            </Map>
          </YMaps>
          <div className="profile__card-content">
            <div className="profile__card-info">
              <b>ID: </b>
              <span>{store.clinics.currentClinic.id}</span>
            </div>
            <div className="profile__card-info">
              <b>INN: </b>
              <span>{store.clinics.currentClinic.inn}</span>
            </div>
            <div className="profile__card-info">
              <b>Clinic Name: </b>
              <span>{store.clinics.currentClinic.name}</span>
            </div>
            <div className="profile__card-info">
              <b>Clinic Address: </b>
              <span>{store.clinics.currentClinic.address}</span>
            </div>
            <div className="profile__card-info">
              <b>Joined Users Count: </b>
              <span>{store.clinics.currentClinic?.users.length ?? 0}</span>
            </div>
            <b>Need bloods: </b>
            <div className={'profile__card-badges'}>
              {store.bloodTypes.bloodTypes.map((bloodType) => {
                const isNeed = store.clinics.currentClinic?.needBloods.find(
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
        <div>
          <h3 className="users-list__title">Joined users</h3>
          {!!store.clinics.currentClinic?.users.length && (
            <div className="users-list">
              {store.clinics.currentClinic.users.map((user) => (
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
          )}
        </div>
      </UIContainer>
    </Layout>
  );
};

export default observer(ClinicPage);

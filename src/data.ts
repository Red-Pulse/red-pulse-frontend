export interface ApiBloodType {
  id: number;
  short_name: string;
  long_name: string;
  type: string;
}

export interface ApiClinic {
  id: number;
  inn: number;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
  need_bloods: Array<ApiBloodType>;
}

export const bloodTypes: ApiBloodType[] = [
  {
    id: 1,
    short_name: '0+',
    long_name: 'Positive 0',
    type: 'Positive_0',
  },
  {
    id: 2,
    short_name: 'A+',
    long_name: 'Positive A',
    type: 'Positive_A',
  },
  {
    id: 3,
    short_name: 'B+',
    long_name: 'Positive B',
    type: 'Positive_B',
  },
  {
    id: 4,
    short_name: 'AB+',
    long_name: 'Positive AB',
    type: 'Positive_AB',
  },
  {
    id: 5,
    short_name: '0-',
    long_name: 'Negative 0',
    type: 'Negative_0',
  },
  {
    id: 6,
    short_name: 'A-',
    long_name: 'Negative A',
    type: 'Negative_A',
  },
  {
    id: 7,
    short_name: 'B-',
    long_name: 'Negative B',
    type: 'Negative_B',
  },
  {
    id: 8,
    short_name: 'AB-',
    long_name: 'Negative AB',
    type: 'Negative_AB',
  },
];
export const clinics: ApiClinic[] = [
  {
    id: 1,
    inn: 213124,
    name: 'Городская больница №7 имени Аль-Фергани',
    latitude: 49.123141,
    longitude: 69.321122,
    address: 'Ташкент, ул. Бухара, д. 32',
    need_bloods: [bloodTypes[0], bloodTypes[4]],
  },
  {
    id: 2,
    inn: 113124,
    name: 'Центральная клиническая больница',
    latitude: 49.222141,
    longitude: 69.3112122,
    address: 'Ташкент, ул. Богишамол, 3',
    need_bloods: [bloodTypes[3], bloodTypes[2], bloodTypes[5]],
  },
  {
    id: 3,
    inn: 122124,
    name: 'Детская городская поликлиника',
    latitude: 49.222141,
    longitude: 69.3112122,
    address: 'Ташкент, ул. Мухаммад Юсуф, 10',
    need_bloods: [bloodTypes[0], bloodTypes[1], bloodTypes[2], bloodTypes[7]],
  },
  {
    id: 4,
    inn: 122124,
    name: 'Детская городская поликлиника',
    latitude: 49.222141,
    longitude: 69.3112122,
    address: 'Ташкент, ул. Мухаммад Юсуф, 10',
    need_bloods: [bloodTypes[0], bloodTypes[1], bloodTypes[2], bloodTypes[7]],
  },
  {
    id: 5,
    inn: 122124,
    name: 'Детская городская поликлиника',
    latitude: 49.222141,
    longitude: 69.3112122,
    address: 'Ташкент, ул. Мухаммад Юсуф, 10',
    need_bloods: [bloodTypes[0], bloodTypes[1], bloodTypes[2], bloodTypes[7]],
  },
  {
    id: 6,
    inn: 122124,
    name: 'Детская городская поликлиника',
    latitude: 49.222141,
    longitude: 69.3112122,
    address: 'Ташкент, ул. Мухаммад Юсуф, 10',
    need_bloods: [bloodTypes[0], bloodTypes[1], bloodTypes[2], bloodTypes[7]],
  },
];

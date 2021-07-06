({
  AmbulanceStation: 'global entity',

  name: { type: 'string', unique: true },
  login: { type: 'string', unique: true },
  password: 'string',

  city: 'string',
  street: 'string',
  building: 'string',

  phone: { type: 'string', unique: true },
  doctors: { many: 'AmbulanceDoctor' },

  addressKey: { unique: ['city', 'street', 'building'] },
});

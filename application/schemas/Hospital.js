({
  Hospital: 'global entity',

  name: { type: 'string', unique: true },
  login: { type: 'string', unique: true },
  password: 'string',

  location: { type: 'point', required: false },
  coordinates: { type: 'json', required: true },

  city: 'string',
  street: 'string',
  building: 'string',

  phone: { type: 'string', unique: true },
  features: { many: 'Feature' },

  addressKey: { unique: ['city', 'street', 'building'] },
});

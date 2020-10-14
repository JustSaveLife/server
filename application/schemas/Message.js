({
  Message: 'global entity',

  address: 'string',
  age: 'number',
  weight: 'number',
  gender: 'string',

  registration: 'datetime',
  episode: 'datetime',

  gcScale: 'number',
  arterialPressure: 'string',
  symptoms: 'string',
  patology: 'string',
  solution: 'string',

  hospital: { type: 'Hospital', required: false },
});

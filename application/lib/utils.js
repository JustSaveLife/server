({
  intervalsInMs: {
    threeHours: 10800000,
    eightHours: 28800000,
    day: 691200000
  },

  teraphies: {
    thrombolytic: 'TLT',
    endovascular: 'EVT',
    thrombectomy: 'TE',
    thrombospiration: 'TA',
  },

  features: {
    mrt: 'MRT',
    kt: 'KT'
  },

  getMozokResult(mozok) {
    return Object.values(mozok).reduce((sum, value) => sum + value, 0);
  },
});

({
  intervalsInMs: {
    threeHours: 10800000,
    eightHours: 28800000,
    day: 691200000
  },

  teraphies: {
    thrombolytic: 'тромболітична терапія',
    endovascular: 'ендоваскулярна терапія',
    thrombectomy: 'тромбектомія',
    thrombospiration: 'тромбаспірація',
    symptom: 'симптоматична терапія'
  },

  features: {
    mrt: 'MRT',
    kt: 'KT'
  },

  getMozokResult(mozok) {
    return Object.values(mozok).reduce((sum, value) => sum + value, 0);
  },
});

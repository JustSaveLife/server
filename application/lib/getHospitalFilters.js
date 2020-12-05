async ({ time, mozok }) => {
  const mozokResult = lib.utils.getMozokResult(mozok);
  const { episode, symptompsDefinition } = time;
  const nowDateInMs = new Date().getMilliseconds();
  const episodeTimeDifference = nowDateInMs - episode;
  const symptomsTimeDifference = nowDateInMs - episode;
  const { intervalsInMs, teraphies } = lib.utils;

  if (episodeTimeDifference <= intervalsInMs.threeHours) {
    return { teraphies: [teraphies.thrombolytic], includeFeatures: false };
  }

  if (episodeTimeDifference > intervalsInMs.threeHours &&
    episodeTimeDifference < intervalsInMs.threeHours) {
    return mozokResult <= 3
      ? { teraphies: [teraphies.thrombolytic], includeFeatures: true }
      : {
        teraphies: [teraphies.thrombospiration, teraphies.endovascular],
        includeFeatures: true
      };
  }

  if (episodeTimeDifference <= intervalsInMs.day &&
    symptomsTimeDifference <= intervalsInMs.threeHours) {
    return mozokResult <= 3
      ? { teraphies: [teraphies.thrombolytic], includeFeatures: true }
      : {
        teraphies: [teraphies.thrombospiration, teraphies.endovascular],
        includeFeatures: true
      };
  }

  if (episodeTimeDifference <= intervalsInMs.day &&
    symptomsTimeDifference > intervalsInMs.threeHours) {
    return mozokResult <= 3
      ? { teraphies: [teraphies.symptom], includeFeatures: false }
      : {
        teraphies:[teraphies.thrombospiration, teraphies.endovascular],
        includeFeatures: true
      };
  }

  if (episodeTimeDifference > intervalsInMs.day) {
    return { teraphies: [teraphies.symptom], includeFeatures: false };
  }
};

async ({ time, mozok }) => {
  const mozokResult = lib.utils.getMozokResult(mozok);
  const { episode, symptompsDefinition } = time;
  const { intervalsInMs, teraphies } = lib.utils;

  if (episode <= intervalsInMs.threeHours) {
    return { teraphies: [teraphies.thrombolytic], includeFeatures: false };
  }

  if (episode > intervalsInMs.threeHours &&
    episode < intervalsInMs.threeHours) {
    return mozokResult <= 3
      ? { teraphies: [teraphies.thrombolytic], includeFeatures: true }
      : {
        teraphies: [teraphies.thrombospiration, teraphies.endovascular],
        includeFeatures: true
      };
  }

  if (episode <= intervalsInMs.day &&
    symptompsDefinition <= intervalsInMs.threeHours) {
    return mozokResult <= 3
      ? { teraphies: [teraphies.thrombolytic], includeFeatures: true }
      : {
        teraphies: [teraphies.thrombospiration, teraphies.endovascular],
        includeFeatures: true
      };
  }

  if (episode <= intervalsInMs.day &&
    symptompsDefinition > intervalsInMs.threeHours) {
    return mozokResult <= 3
      ? { teraphies: [teraphies.thrombolytic], includeFeatures: false }
      : {
        teraphies:[teraphies.thrombospiration, teraphies.endovascular],
        includeFeatures: true
      };
  }

  if (episode > intervalsInMs.day) {
    return { teraphies: [...Object.values(teraphies)], includeFeatures: false };
  }
};

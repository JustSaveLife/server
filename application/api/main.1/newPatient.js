// endpoint which analyzes telephone message and
// returns solution and list of hospitals
async (data) => {
  const {
    // age,
    // fullName,
    // weight,
    // gender,
    episodeTimeMs,
    symptompsDefinitionTimeMs,
    symptoms,
    // pathologies,
    // measurements,
    // medicines
  } = data;
  const time = {
    episode: episodeTimeMs,
    symptompsDefinition: symptompsDefinitionTimeMs
  };
  let response = { resolved: true };

  try {
    const { teraphies } = lib.getHospitalFilters({
      time,
      mozok: symptoms.mozok,
    });
    response.data.solution = `Рекомендоване лікування: ${teraphies.join(',')}`;
    // TODO include pathologies, measurements, medicines
    // TODO get records of hospitals including filters
    // TODO store message to db
    return { result: 'success', data };
  } catch (err) {
    response = {
      resolved: false,
      error: err.message,
    };
  }

  return response;
};

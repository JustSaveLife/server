// should be removed

interface RequestInterface {
  age: number;
  fullName: string;
  weight: number;
  gender: string;
  episodeTimeMs: Date;
  symptomsDefinitionTimeMs: Date;
  symptoms: {
    mozok: {
      speech: number,
      eyeDeviation: number,
      danielOfHalfOfBody: number,
      face: number,
      upperLimb: number,
      lowerLimb: number
    },
    glazgowScale: number
  };
  pathologies: string[];
  measurements: {
    arterialPressure: string,
    sugarLevel: number,
    temperature: number,
    ekg: string
  };
  medicines: string[];
}

interface ResponseInterface {
  resolved: boolean;
  data?: {
    solution: string;
    hospitals: {
      name: string;
      address: string;
      phone: string;
      coordinates: {
        lat: string,
        long: string,
      }
    }[]
  };
  error?: string;
}

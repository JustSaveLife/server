interface Feature {
  featureId: number;
  name: string;
}

interface Hospital {
  hospitalId: number;
  name: string;
  login: string;
  password: string;
  location?: string;
  coordinates: {
    latitude: string,
    longitude: string
  };
  city: string;
  street: string;
  building: string;
  phone: string;
}

interface Message {
  messageId: number;
  address: string;
  age: number;
  weight: number;
  gender: string;
  registration: string;
  episode: string;
  gcScale: number;
  arterialPressure: string;
  symptoms: string;
  pathology: string;
  solution: string;
  hospitalId?: number;
}

interface AmbulanceDoctor {
  doctorId: number;
  name: string;
  phone: string;
  password: string;
}

interface AmbulanceStation {
  ambulanceStationId: number;
  name: string;
  login: string;
  password: string;
  phone: string;
  city: string;
  street: string;
  building: string;
}

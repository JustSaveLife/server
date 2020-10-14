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
  patology: string;
  solution: string;
  hospitalId?: number;
}

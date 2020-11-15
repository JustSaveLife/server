BEGIN TRANSACTION;

CREATE TABLE "Feature" (
  "featureId"         bigint  PRIMARY KEY  generated always as identity  NOT NULL,
  "name"              varchar                                            NOT NULL
);

CREATE TABLE "Hospital" (
  "hospitalId"        bigint  PRIMARY KEY  generated always as identity  NOT NULL,
  "name"              varchar                                            NOT NULL,
  "login"             varchar                                            NOT NULL,
  "password"          varchar                                            NOT NULL,
  "location"          point,
  "coordinates"       JSONB                                              NOT NULL,
  "city"              varchar                                            NOT NULL,
  "street"            varchar                                            NOT NULL,
  "building"          varchar                                            NOT NULL,
  "phone"             varchar                                            NOT NULL,
  CONSTRAINT "akHospitalAddressKey" UNIQUE ("city", "street", "building")
);

CREATE TABLE "HospitalFeature" (
  "hospitalId"        bigint                                             NOT NULL,
  "featureId"         bigint                                             NOT NULL,
  CONSTRAINT "pkHospitalFeature" PRIMARY KEY ("hospitalId", "featureId"),
  CONSTRAINT "fkHospitalFeatureHospital" FOREIGN KEY ("hospitalId") REFERENCES "Hospital" ("hospitalId"),
  CONSTRAINT "fkHospitalFeatureFeature" FOREIGN KEY ("featureId") REFERENCES "Feature" ("featureId")
);

CREATE TABLE "AmbulanceDoctor" (
  "doctorId"          bigint  PRIMARY KEY  generated always as identity  NOT NULL,
  "name"              varchar                                            NOT NULL,
  "phone"             varchar                                            NOT NULL,
  "password"          varchar                                            NOT NULL
);

CREATE TABLE "AmbulanceStation" (
  "stationId"         bigint  PRIMARY KEY  generated always as identity  NOT NULL,
  "login"             varchar                                            NOT NULL,
  "password"          varchar                                            NOT NULL,
  "name"              varchar                                            NOT NULL,
  "city"              varchar                                            NOT NULL,
  "street"            varchar                                            NOT NULL,
  "building"          varchar                                            NOT NULL,
  "phone"             varchar                                            NOT NULL,
  CONSTRAINT "akAmbulanceStationAddressKey" UNIQUE ("city", "street", "building")
);

CREATE TABLE "AmbulanceStationDoctors" (
 "stationId" bigint NOT NULL,
 "doctorId" bigint NOT NULL,
 CONSTRAINT "fkAmbulanceStation" FOREIGN KEY ("stationId") REFERENCES "AmbulanceStation" ("stationId"),
 CONSTRAINT "fkAmbulanceDoctor" FOREIGN KEY ("doctorId") REFERENCES "AmbulanceDoctor" ("doctorId")
);

CREATE TABLE "Message" (
  "messageId"         bigint  PRIMARY KEY  generated always as identity   NOT NULL,
  "address"           varchar                                             NOT NULL,
  "age"               integer                                             NOT NULL,
  "weight"            integer                                             NOT NULL,
  "gender"            varchar                                             NOT NULL,
  "registration"      timestamp with time zone                            NOT NULL,
  "episode"           timestamp with time zone                            NOT NULL,
  "gcScale"           integer                                             NOT NULL,
  "arterialPressure"  varchar                                             NOT NULL,
  "symptoms"          varchar                                             NOT NULL,
  "pathology"         varchar                                             NOT NULL,
  "solution"          varchar                                             NOT NULL,
  "hospitalId"        bigint,
  "doctorId"          bigint,
  CONSTRAINT "fkMessageHospital" FOREIGN KEY ("hospitalId") REFERENCES "Hospital" ("hospitalId"),
  CONSTRAINT "fkMessageAmbulanceDoctor" FOREIGN KEY ("doctorId") REFERENCES "AmbulanceDoctor" ("doctorId")
);

COMMIT;

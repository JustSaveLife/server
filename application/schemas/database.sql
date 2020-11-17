CREATE TABLE "Feature" (
  "featureId" bigint generated always as identity,
  "name" varchar NOT NULL
);

ALTER TABLE "Feature" ADD CONSTRAINT "pkFeature" PRIMARY KEY ("feature");

CREATE TABLE "Hospital" (
  "hospitalId" bigint generated always as identity,
  "name" varchar NOT NULL,
  "login" varchar NOT NULL,
  "password" varchar NOT NULL,
  "location" point,
  "city" varchar NOT NULL,
  "street" varchar NOT NULL,
  "building" varchar NOT NULL,
  "phone" varchar NOT NULL
);

ALTER TABLE "Hospital" ADD CONSTRAINT "pkHospital" PRIMARY KEY ("hospital");

CREATE TABLE "HospitalFeature" (
  "hospitalId" bigint NOT NULL,
  "featureId" bigint NOT NULL
);

ALTER TABLE "HospitalFeature" ADD CONSTRAINT "pkHospitalFeature" PRIMARY KEY ("hospitalId", "featureId");
ALTER TABLE "HospitalFeature" ADD CONSTRAINT "fkHospitalFeatureHospital" FOREIGN KEY ("hospitalId") REFERENCES "Hospital" ("hospitalId");
ALTER TABLE "HospitalFeature" ADD CONSTRAINT "fkHospitalFeatureFeature" FOREIGN KEY ("featureId") REFERENCES "Feature" ("featureId");
CREATE UNIQUE INDEX "akHospitalAddressKey" ON "Hospital" ("city", "street", "building");

CREATE TABLE "Message" (
  "messageId" bigint generated always as identity,
  "address" varchar NOT NULL,
  "age" integer NOT NULL,
  "weight" integer NOT NULL,
  "gender" varchar NOT NULL,
  "registration" timestamp with time zone NOT NULL,
  "episode" timestamp with time zone NOT NULL,
  "gcScale" integer NOT NULL,
  "arterialPressure" varchar NOT NULL,
  "symptoms" varchar NOT NULL,
  "patology" varchar NOT NULL,
  "solution" varchar NOT NULL,
  "hospitalId" bigint
);

ALTER TABLE "Message" ADD CONSTRAINT "pkMessage" PRIMARY KEY ("message");
ALTER TABLE "Message" ADD CONSTRAINT "fkMessageHospital" FOREIGN KEY ("hospitalId") REFERENCES "Hospital" ("hospitalId");

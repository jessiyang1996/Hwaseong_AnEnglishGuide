-- Table for user
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Table for address for recommended Nearby Locations
CREATE TABLE "address" (
	"id" SERIAL PRIMARY KEY,
	"k_street_address" VARCHAR (500) NOT NULL,
	"k_city" VARCHAR(250) NOT NULL,
	"k_province" VARCHAR (250) NOT NULL,
	"k_zipcode" INT NOT NULL,
--	"recommendation_id" INT NOT NULL,
	"street_address" VARCHAR (500) NOT NULL,
	"city" VARCHAR(250) NOT NULL,
	"province" VARCHAR (250) NOT NULL,
	"zipcode" INTEGER NOT NULL
);

-- Table for recommended Nearby locations
CREATE TABLE "recommendation" (
	"id" SERIAL PRIMARY KEY,
	"description" TEXT NOT NULL,
	"image" TEXT NOT NULL,
	"category" VARCHAR(500) NOT NULL
);
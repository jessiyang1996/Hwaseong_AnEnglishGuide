-- Table for user
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


---- Table for recommended Nearby locations
CREATE TABLE "nearby_recommendations" (
	"id" SERIAL PRIMARY KEY,
	"location_name" VARCHAR(500) NOT NULL,
	"korean_address" VARCHAR (1000) NOT NULL,
	"address" VARCHAR (1000) NOT NULL,
	"category" VARCHAR(500) NOT NULL,
	"description" TEXT NOT NULL,
	"header_image" TEXT 
);

-- Table for photos

CREATE TABLE "recommendation_images" (
	"id" SERIAL PRIMARY KEY,
	"recommendation_id" INTEGER NOT NULL,
	"name" VARCHAR(25) NOT NULL,
	"image_src" VARCHAR(300) NOT NULL,
); 

-- Add initial data to the Nearby Recommendation Locations:
INSERT INTO "nearby_recommendations" ("location_name", "korean_address", "address", "category", "description", "header_image")
VALUES 
('Tando Port', '경기 안산시 단원구 선감동 717-5', '717-5 Seongnam-dong, Dangwon-gu, Ansan-si, Gyeonggi-do, South Korea', 'Explore', 'Tando Port is located in Ansan. It is located right next to Jeongok Port. There is a path along the waters that lead you from the two. Tando port is famous for it’s sunset scenery with the three wind turbines. Like Jebu-do, the water recedes back into the sea approximately 2 times a day. When this happens, there is a road that appears. Visitors can take this path to a small uninhabited island called Nue Island.', '/images/tando_port.jpeg'),

('Suwon Hwaseong Fortress', '경기 수원시 장안구 영화동 320-2', '320-2 Yeonghwa-dong, Jangan-gu, Suwon, Gyeonggi-do, South Korea', 'Explore', 'Take a step back into history. Suwon Hwaseong Fortress is a famous fortress that is a little over 1 hour away from Seoul and western Hwaseong. It’s a big fortress that encircles a large part of Suwon city. The story behind Suwon Fortress is filled with sorrow. Due to his numerous misdeeds, Crown Prince Sado was confined inside a chest by his father. He later passed away after being confined in the chest for days. When his son, King Jeongo, later ascended to the throne, he built Suwon Hwasong Fortress to pay tribute and safeguard his father’s tomb. His father’s tomb was later moved to Hwaseong City and called Yunggeolleung (융건릉). 

Today, there are many things to do at or around the fortress. Many people enjoy taking walks around the fortress walls, visiting the palace, picnicking with friends and family, or watching the sunset here. Every year, they have a festival here. There are also many cafes and restaurants outside of the fortress for visitors to enjoy. 
', '/images/SuwonHwaseong_1.jpg'),


('Suwon Station (수원역)', '경기 수원시 팔달구 덕영대로 924', '924 Deogyeongdaero, Paldal-gu, Suwon-si, Gyeonggi-do', 'Shopping', 'Suwon Station is one of the closest train stations if you live in western Hwaseong. There are many buses that you can take to Suwon Station (1004, 300, 400) as it is a major train station/bus transfer area. Because of this, you will see all kinds of people there. From sunrise until sunset, it is always busy and filled with people. You can always see people shopping or lined up for buses, trains, or KTX. At Suwon Station, you can find all the modern conveniences. There are large shopping malls (Lotte, AK Young Plaza), convenient stores, underground shopping malls, street foods, big chain grocery stores, many restaurants and cafes, and Rodeo Street nearby. As universities and hagwons are nearby, you will also see a lot of students spending time here.', '/images/SuwonStation_1.jpg'),

('효원공원 월화원', '경기도 수원시 팔달구 인계동', '399 Dongsuwon-ro, Paldal-gu, Suwon-si, Gyeonggi-do', 'Explore', 'Wolhwawon Garden is located in Hyowon Park (효원공원). It is famous among locals for its chinese-style garden. Many people go here during the fall to look at the fall foliage.', '/images/WolhwawonGarden_1.jpg');


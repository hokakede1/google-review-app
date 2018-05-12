CREATE TABLE "users" (
	"user_id" serial NOT NULL UNIQUE,
	"user_first_name" varchar(50) NOT NULL,
	"user_last_name" varchar(30) NOT NULL,
	"user_email" varchar(100) NOT NULL UNIQUE,
	"user_passwords" varchar(500) NOT NULL,
	"user_profile_pic" TEXT NOT NULL DEFAULT 'http://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg',
	"user_location" TEXT,
	CONSTRAINT users_pk PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "locations" (
	"location_id" serial NOT NULL,
	"location_user_id" int NOT NULL,
	"location_name" varchar(500) NOT NULL,
	"location_reviews" varchar(500),
	CONSTRAINT locations_pk PRIMARY KEY ("location_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "locations" ADD CONSTRAINT "locations_fk0" FOREIGN KEY ("location_user_id") REFERENCES "users"("user_id");

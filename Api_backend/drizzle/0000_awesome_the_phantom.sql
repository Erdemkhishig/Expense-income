CREATE TABLE IF NOT EXISTS "auth" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"email" varchar(256),
	"password" varchar(8)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "records" (
	"id" serial PRIMARY KEY NOT NULL,
	"amount" varchar(256),
	"userId" integer,
	"time" varchar,
	"date" varchar,
	"categoryId" integer,
	"payee" varchar(256),
	"note" varchar(256),
	"status" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"iconName" varchar(256)
);

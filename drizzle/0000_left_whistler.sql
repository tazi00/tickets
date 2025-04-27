CREATE TYPE "public"."status" AS ENUM('ACTIVE', 'INACTIVE', 'PROGRESS');--> statement-breakpoint
CREATE TABLE "Ticket" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"content" varchar(255),
	"status" "status" DEFAULT 'PROGRESS' NOT NULL,
	"updated_at" timestamp DEFAULT now(),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "User" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"phone" varchar(256),
	"age" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	"bio" varchar(255),
	CONSTRAINT "User_email_unique" UNIQUE("email")
);

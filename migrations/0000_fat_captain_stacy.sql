-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
-- Tabla user
CREATE TABLE user (
	id TEXT PRIMARY KEY NOT NULL,
	email TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL
);

-- Índice único para el campo email en la tabla user
CREATE UNIQUE INDEX user_email_unique ON user (email);

-- Tabla session
CREATE TABLE session (
	id TEXT PRIMARY KEY NOT NULL,
	user_id TEXT NOT NULL,
	expires_at INTEGER NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id)
);

-- Tabla users
CREATE TABLE users (
	id INTEGER PRIMARY KEY,
	username TEXT NOT NULL,
	email TEXT
);

-- Tabla usuarios
CREATE TABLE usuarios (
	id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
	nombre TEXT NOT NULL,
	apellido TEXT NOT NULL,
	email TEXT NOT NULL,
	rol TEXT NOT NULL,
	password TEXT,
	token TEXT,
	resetToken TEXT
);

-- Relaciones
-- Relación entre session y user
-- Esta relación es gestionada por el FOREIGN KEY en session que referencia a user

*/
-- Users Table
drop table user;
CREATE TABLE IF NOT EXISTS user
(
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    username   VARCHAR(255) UNIQUE NOT NULL,
    password   VARCHAR(255)        NOT NULL,
    created_dt TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_dt TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER IF NOT EXISTS update_timestamp
    AFTER UPDATE
    ON user
    for each row
begin
    update user set updated_dt = CURRENT_TIMESTAMP where id = OLD.id;
end;


CREATE TABLE IF NOT EXISTS post
(
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    title      VARCHAR(255) UNIQUE NOT NULL,
    message    text                NOT NULL,
    created_dt TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_dt TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP
);
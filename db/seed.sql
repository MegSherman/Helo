create table helo_users (
id serial primary key,
username varchar(20),
-- password data type is altered to 'text' in the command below:
password varchar(20),
profile_pic text
);

alter table helo_users
alter password
set data type text;

create table posts (
id serial primary key,id
title varchar(45),
img text,
content text,
author_id integer references helo_users(id)
);


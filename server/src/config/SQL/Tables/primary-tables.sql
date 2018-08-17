-- -- USERS
drop table if exists Users;
create table Users (
    id int not null auto_increment primary key,
    email varchar(56) not null,
    firstname varchar(256) not null,
    lastname varchar(256) not null,
    password text not null,
    _created datetime default current_timestamp

);
-- -- TAGS
drop table if exists Tags;
create table Tags (
    id int not null auto_increment primary key,
    name text not null,
    _created datetime default current_timestamp
);
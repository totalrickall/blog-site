-- -- TOKENS
drop table if exists Tokens;
create table Tokens (
    id int not null auto_increment primary key,
    userid int not null,
    _created datetime default current_timestamp
);
-- -- POSTS
drop table if exists Posts;
create table Posts (
    id int not null auto_increment primary key,
    userid int not null,
    content text not null,
    title text not null,
    _created datetime default current_timestamp
);
-- -- POST-TAGS
drop table if exists PostTags;
create table PostTags (
    id int not null auto_increment primary key,
    postid int not null,
    tagid int not null,
    _created datetime default current_timestamp
);
-- -- USER FAVORITES TABLE
drop table if exists UserFavorites;
create table UserFavorites (
    id int not null auto_increment primary key,
    postid int not null,
    userid int not null,
    _created datetime default current_timestamp

);
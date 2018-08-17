-- -- USERS STORED PROCEDURES
-- READ ALL
drop procedure if exists spAllUsers;
delimiter $$
create procedure spAllUsers()
begin

select *
from Users;

end $$
delimiter ;
-- READ
drop procedure if exists spReadUser;
delimiter $$
create procedure spReadUser(in p_id int)
begin

select *
from Users
where id = p_id;

end $$
delimiter ;
-- CREATE
drop procedure if exists spCreateUser;
delimiter $$
create procedure spCreateUser(in p_email varchar(56), in p_firstname varchar(256), in p_lastname varchar(256), in p_password text)
begin 

insert into Users(email, firstname, lastname, password)
values(p_email, p_firstname, p_lastname, p_password);
select last_insert_id() as id;

end $$
delimiter ;
-- UPDATE
drop procedure if exists spUpdateUser;
delimiter $$
create procedure spUpdateUser(in p_id int, in p_email varchar(56), in p_firstname varchar(256), in p_lastname varchar(256), in p_password text)
begin

update Users
set
    email= coalesce(p_email, email),
    firstname= coalesce(p_firstname, firstname),
    lastname= coalesce(p_lastname, lastname),
    password= coalesce(p_password, password)
where id = p_id;

end $$
delimiter ;
-- DELETE
drop procedure if exists spDestroyUser;
delimiter $$
create procedure spDestroyUser (in p_id int)
begin

delete from Users
where id = p_id;

end $$
delimiter ;
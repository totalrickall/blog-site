-- -- POSTS STORED PROCEDURES
-- READ ALL
drop procedure if exists spAllTags;
delimiter $$
create procedure spAllTags()
begin

select *
from Tags;

end $$
delimiter ;
-- READ
drop procedure if exists spReadTag;
delimiter $$
create procedure spReadTag(in p_id int)
begin

select *
from Tags
where id = p_id;

end $$
delimiter ;
-- CREATE
drop procedure if exists spCreateTag;
delimiter $$
create procedure spCreateTag(in p_name text)
begin 

insert into Tags(name)
values(p_name);
select last_insert_id() as id;

end $$
delimiter ;
-- UPDATE
drop procedure if exists spUpdateTag;
delimiter $$
create procedure spUpdateTag(in p_id int, in p_name text)
begin

update Tags
set
    name= coalesce(p_name, name)
where id = p_id;

end $$
delimiter ;
-- DELETE
drop procedure if exists spDestroyTag;
delimiter $$
create procedure spDestroyTag (in p_id int)
begin

delete from Tags
where id = p_id;

end $$
delimiter ;
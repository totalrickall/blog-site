-- -- POSTS STORED PROCEDURES
-- READ ALL
drop procedure if exists spAllPostTags;
delimiter $$
create procedure spAllPostTags()
begin

select *
from PostTags;

end $$
delimiter ;
-- READ
drop procedure if exists spReadPostTag;
delimiter $$
create procedure spReadPostTag(in p_id int)
begin

select *
from Posts
where id = p_id;

end $$
delimiter ;
-- CREATE
drop procedure if exists spCreatePostTag;
delimiter $$
create procedure spCreatePostTag(in p_postid int, in p_tagid int)
begin 

insert into PostTags(postid, tagid)
values(p_postid, p_tagid);
select last_insert_id() as id;

end $$
delimiter ;
-- UPDATE
drop procedure if exists spUpdatePostTag;
delimiter $$
create procedure spUpdatePostTag(in p_id int, in p_postid int, in p_tagid int)
begin

update PostTags
set
    postid= coalesce(p_postid, postid),
    tagid= coalesce(p_tagid, tagid)
where id = p_id;

end $$
delimiter ;
-- DELETE
drop procedure if exists spDestroyPostTag;
delimiter $$
create procedure spDestroyPostTag (in p_id int)
begin

delete from PostTags
where id = p_id;

end $$
delimiter ;
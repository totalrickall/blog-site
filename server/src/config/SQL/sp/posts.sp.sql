-- -- POSTS STORED PROCEDURES
-- READ ALL
drop procedure if exists spAllPosts;
delimiter $$
create procedure spAllPosts()
begin

select *
from Posts;

end $$
delimiter ;
-- READ
drop procedure if exists spReadPost;
delimiter $$
create procedure spReadPost(in p_id int)
begin

select *
from Posts
where id = p_id;

end $$
delimiter ;
-- CREATE
drop procedure if exists spCreatePost;
delimiter $$
create procedure spCreatePost(in p_userid int, in p_content text)
begin 

insert into Posts(userid, content)
values(p_userid, p_content);
select last_insert_id() as id;

end $$
delimiter ;
-- UPDATE
drop procedure if exists spUpdatePost;
delimiter $$
create procedure spUpdatePost(in p_id int, in p_userid int, in p_content text)
begin

update Posts
set
    userid= coalesce(p_userid, userid),
    content= coalesce(p_content, content)
where id = p_id;

end $$
delimiter ;
-- DELETE
drop procedure if exists spDestroyPost;
delimiter $$
create procedure spDestroyPost (in p_id int)
begin

delete from Posts
where id = p_id;

end $$
delimiter ;
-- READ BY TAGID
drop procedure if exists spReadPostByTagId;
delimiter $$
create procedure spReadPostByTagId (in p_tagid int)
begin

select 
	p.id,
    p.userid,
    p.content,
    pt.tagid,
    t.name
from Posts p
join PostTags pt on p.id = pt.postid
join Tags t on t.id = pt.tagid
where pt.tagid = p_tagid;

end $$
delimiter ;
-- READ BY USERID
drop procedure if exists spReadPostByUserId;
delimiter $$
create procedure spReadPostByUserId (in p_userid int)
begin

select *
from Posts
where userid = p_userid;

end $$
delimiter ;
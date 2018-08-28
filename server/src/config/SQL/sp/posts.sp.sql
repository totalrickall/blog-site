-- -- POSTS STORED PROCEDURES
-- READ ALL
drop procedure if exists spAllPosts;
delimiter $$
create procedure spAllPosts()
begin

select 
	p.id,
    p.userid,
    p.content,
    p.title,
    u.email,
    u.firstname,
    u.lastname
from Posts p
join Users u on p.userid = u.id;

end $$
delimiter ;
-- READ
drop procedure if exists spReadPost;
delimiter $$
create procedure spReadPost(in p_id int)
begin

select 
	p.id,
    p.userid,
    p.content,
    p.title,
    u.email,
    u.firstname,
    u.lastname
from Posts p
join Users u on p.userid = u.id
where p.id = p_id;

end $$
delimiter ;
-- CREATE
drop procedure if exists spCreatePost;
delimiter $$
create procedure spCreatePost(in p_userid int, in p_content text, in p_title text)
begin 

insert into Posts(userid, content, title)
values(p_userid, p_content, p_title);
select last_insert_id() as id;

end $$
delimiter ;
-- UPDATE
drop procedure if exists spUpdatePost;
delimiter $$
create procedure spUpdatePost(in p_id int, in p_userid int, in p_content text, in p_title text)
begin

update Posts
set
    userid= coalesce(p_userid, userid),
    content= coalesce(p_content, content),
    title= coalesce(p_title, title)
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
    p.title,
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
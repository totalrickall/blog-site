-- -- FAVORITES STORED PROCEDURES
-- ALL
drop procedure if exists spAllFavorites;
delimiter $$
create procedure spAllFavorites()
begin

select *
from UserFavorites;

end $$
delimiter ;
-- READ
drop procedure if exists spReadFavorite;
delimiter $$
create procedure spReadFavorite(in p_id int)
begin 
	
select *
from UserFavorites
where id = p_id;

end $$
delimiter ;
-- CREATE
drop procedure if exists spCreateFavorite;
delimiter $$
create procedure spCreateFavorite(in p_postid int, in p_userid int)
begin

insert into UserFavorites(postid, userid)
values (p_postid, p_userid);
select last_insert_id() as id;
    
end $$
delimiter ;
-- UPDATE
drop procedure if exists spUpdateFavorite;
delimiter $$
create procedure spUpdateFavorite(in p_id int, in p_postid int, in p_userid int)
begin 
	
update UserFavorites 
set
	postid = coalesce(p_postid, postid),
    userid = coalesce(p_userid, userid)
where id = p_id;
	
end $$
delimiter ;

-- DELETE
drop procedure if exists spDestroyFavorite;
delimiter $$
create procedure spDestroyFavorite(in p_id int)
begin 
	
	delete from UserFavorites
	where id = p_id;

end $$
delimiter ;
-- READ BY POSTID
drop procedure if exists spReadFavoriteByPostId;
delimiter $$
create procedure spReadFavoriteByPostId(in p_postid int)
begin

select
	id,
    userid,
	_created
from UserFavorites
where postid = p_postid;

end $$
delimiter ;
-- READ BY USERID
drop procedure if exists spReadFavoriteByUserId;
delimiter $$
create procedure spReadFavoriteByUserID(in p_userid int)
begin

select
	id,
    postid,
	_created
from UserFavorites
where userid = p_userid;

end $$
delimiter ;

-- DELETE BY POSTID
drop procedure if exists spDestroyFavoriteByPostId;
delimiter $$
create procedure spDestroyFavoriteByPostId(in p_postid int)
begin

delete from UserFavorites 
where postid = p_postid;

end $$
delimiter ;
-- DELETE BY USERID
drop procedure if exists spDestroyFavoriteByUserId;
delimiter $$
create procedure spDestroyFavoriteByUserId(in p_userid int)
begin

delete from UserFavorites 
where userid = p_userid;

end $$
delimiter ;

-- DELETE BY USERID & POSTID
drop procedure if exists spDestroyFavoriteByPostIdAndUserId;
delimiter $$
create procedure spDestroyFavoriteByPostIdAndUserId(in p_postid int, in p_userid int)
begin

delete from UserFavorites
where postid = p_postid and userid = p_userid;

end $$
delimiter ;
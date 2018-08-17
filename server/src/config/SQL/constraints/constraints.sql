-- -- Tokens
-- constraint: Userid
alter table Tokens
add constraint fk_TokensUserid
foreign key (userid)
references Users(id);

-- -- Posts
-- constraint: Userid
alter table Posts
add constraint fk_PostsUserid
foreign key (userid)
references Users(id);

-- -- PostTags
-- constraint: Postid
alter table PostTags
add constraint fk_PostTagsPostid
foreign key (postid)
references Posts(id);

-- constraint: Tagid
alter table PostTags
add constraint fk_PostTagsTagid
foreign key (tagid)
references Tags(id);

-- -- UserFavorites
-- constraint: Postid
alter table UserFavorites
add constraint fk_UserFavoritesPostid
foreign key (postid)
references Posts(id);
-- constraint: Userid
alter table UserFavorites
add constraint fk_UserFavoritesUserid
foreign key (userid)
references Users(id);
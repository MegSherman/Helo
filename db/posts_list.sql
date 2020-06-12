select p.title, h.username, h.profile_pic, h.id
from posts p
join helo_users h on p.author_id = h.id;
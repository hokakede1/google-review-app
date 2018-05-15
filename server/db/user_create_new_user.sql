insert into users (
user_email,
user_password,
user_first_name,
user_last_name ,
user_profile_pic ,
user_location)
values
($1, $2, $3, $4, $5, $6)
RETURNING *;
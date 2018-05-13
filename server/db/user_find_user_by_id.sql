select user_email, user_first_name, user_last_name, user_location, user_profile_pic from users
where user_id = $1;
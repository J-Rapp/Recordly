# Recordly

Well hello! App creation started around 4:20pm Pacific, here we go :)

Okie doke, roughly 1 hour in and dev/prod are both set up. Time to work on tests and features.

## 2 hour mark

I left off working on my feature/registration branch. I started creating a simple AJAX call to render the form for user#new. Once that was built, I was going to start on the User model/migration, using Bcrypt for authentication.

## Reflection

I chose to go the route of making sure all my environemtns were set up first, with the intention of stressing TDD. 

I definitely didn't make it as far as I'd liked thanks to some snags with Postgres on both my dev and prod environments. There's a lot left to do here to make it a "real" app, but that said, the majority of what's left will be fairly basic CRUD.

I was perhaps too rushed pressing forward in attempt to get to the user model, when I could've started TDD.

I was relying heavily on the master branch, whereas separate 'develop' and 'deploy' branches would've been more appropriate.

My overall progress was hindered by the postgres stuff, but addressing bugs like those can be equally as important productive/learning moments.

## See it live

[Recordly](http://jrapp-recordly.herokuapp.com)


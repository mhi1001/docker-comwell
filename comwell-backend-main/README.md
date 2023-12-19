# comwell-backend

Server runs on 127.0.0.1:3000 <br>
DB string is in app.module.ts

# Available routes

127.0.0.1:3000/ - Default nestJS HelloWorld
<br>
127.0.0.1:3000/users/register - Create new User
<br>
127.0.0.1:3000/auth/login -> login and get the JWT token
<br>
127.0.0.1:3000/auth/profile -> profile page (only to verify if the JWT token auth works right now.....)
<br>
127.0.0.1:3000/hotels -> get all hotels and their rooms
<br>
127.0.0.1:3000/bookings/:bookingId -> Get a booking info
<br>
127.0.0.1:3000/bookings/add -> Post a booking


# Running the project

npm run start:dev -> Automatically restarts when new change is detected to the code

# Populating the database

ts-node populateDb.ts

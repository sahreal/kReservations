# kReservations

## Summary

A single page app to help users book reservations at their favorite restaurant, between half hour slots between 6pm-10pm during the week of July 24th - July 31st.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a build:

```sh
npm run build-dev
```

To create a development build:

```sh
npm run dev
```

## Features

- Database:
  Using MongoDb atlas as database to store the availability during the half hour slots between restuarant hours. Each seating area is its own collection. The size adjusts when customers make reservations.

  ![Database](/ReadMeImages/mongoAtlas.png)

- Adjust Restuarant Capacity:
  Located on line 27 in server/controllers/index.js you can find this hastable that can act as a custom way to set the max seating capacity per seating area in order to test booking functionality.

  ![AdjustCapacity](/ReadMeImages/maxCap.png)

- DevTools - on the top right hand corner you should notice two buttons in the top right corner. These are not for the user, but are met for my and You! Feel free to use run tests, by either: Clearing local storage, or refreshing the database and deleting reservations that are being submitted once you confirm a reservation.

Close:

![closed](/ReadMeImages/close.png)

Open:

![Opened](/ReadMeImages/open.png)

## Running

running on localhost:3000

## Tech Stack

- Javascript / HTML / CSS
- React/ Hooks / React Router
- Mongoose / MongoDB(atlas)
- Webpack
- Axios

## Future considerations

I had built out a schema and database in order to build a way for the user to actually store and then later retrieve their confirmations, but wanted to focus on other aspects of this app.

Its not far from being mobile ready but could use some work, that would be the last step in really bringing this app full circle.

In the future, and in general, I tend to use styled components, but found that the inline styling wasnt to intense, so I ended up using pure CSS.

## Credits

Made with [createapp.dev](https://createapp.dev/)

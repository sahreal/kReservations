# kReservations

## Summary

A single page app to help users book reservations at their favorite restaurant during half hour slots between the hours of 6pm-10pm for the week of July 24th - July 31st.

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
## Running

running on localhost:3000

## Features

- Database:
  Using MongoDb atlas as a database to store the availability during the half hour slots. Each seating area is its own collection. The availability adjusts and is updated when customers confirm their reservations.

  ![Database](/ReadMeImages/mongoAtlas.png)

- Adjust Restuarant Capacity:
  Located on line 27 in server/controllers/index.js you can find this hastable that can act as a custom way to set the max seating capacity per seating area in order to test booking functionality.

  ![AdjustCapacity](/ReadMeImages/maxCap.png)

- DevTools: 
  On the top right hand corner you should notice two buttons. These are not for the user, but are meant for me and You! Feel free to use these to run tests by either: Clearing local storage, or refreshing the database and deleting reservations that are being submitted once you confirm a reservation.

Close:

![closed](/ReadMeImages/close.png)

Open:

![Opened](/ReadMeImages/open.png)


## Tech Stack

- Javascript / HTML / CSS
- React/ Hooks / React Router
- Mongoose / MongoDB(atlas)
- Webpack
- Axios

## Considerations/Future Considerations

This was built on Chrome and I did not do cross-browser testing. Its not far from being mobile ready but could use some work, that would be the last step in really bringing this app full circle.

I had built out a schema and database in order to build a way for the user to actually store and then later retrieve their confirmations, but wanted to focus on other aspects of this app.

In the future, and in general, I tend to use styled-components, but found that the inline styling wasnt too intense so I ended up using pure CSS.

## Credits

Made with [createapp.dev](https://createapp.dev/)

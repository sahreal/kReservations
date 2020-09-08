# kReservations

A Full Stack Reservations Application

A single page app to help users book reservations at their favorite restaurant during half hour slots between the hours of 6pm-10pm for the week of July 24th - July 31st.

# Getting started:

 - [x] `git clone` the repo.
 - [x] Install dependencies: `npm install`
 - [x] Run the following `npm` scripts concurrently:
 - [x] Create build: `npm run build-dev`
 - [x] Start the app: `npm run dev`

# Application Breakdown and Features:

## Reservation Form and Submissions: 
 - Form requests and validates user info: Name, Email, Phone Number, Party Size, Birthday, Children attending, Smokers attending
 - Check Availability button submits API request to find if dining regions are eligible.
 - All submitted information must be valid and abide by restaurant rules and guidelines. 
 - Confirm button brings you to the Review Page.
 - Review page: Last chance to change your mind! Lists all previously submitted info. Confirm button updates the API updates. That reservation slot is now taken.
 - Confirmation: Its booked. Lists all relevant information, with "Make Another reservation button" bringing you to the home page and clearing local storage.

## Database:
  Using MongoDb atlas as a database to store the availability during the half hour slots. Each seating area is its own collection. The availability adjusts and is updated when customers confirm their reservations.

  ![Database](/ReadMeImages/mongoAtlas.png)

## Adjust Restuarant Capacity:
  Located on line 27 in server/controllers/index.js you can find this hastable that can act as a custom way to set the max seating capacity per seating area in order to test booking functionality.

  ![AdjustCapacity](/ReadMeImages/maxCap.png)

## DevTools: 
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

`* For purposes of expediancy this app has a temporary guest password. It will expire in one week. * `

This was built on Chrome and I did not do cross-browser testing. Its not far from being mobile ready but could use some work, that would be the last step in really bringing this app full circle.

Update docker-compose to allow local database testing on multiple machines.

I had built out a schema and database in order to build a way for the user to actually store and then later retrieve their confirmations, but wanted to focus on other aspects of this app.

In the future, and in general, I tend to use styled-components, but found that the inline styling wasnt too intense so I ended up using pure CSS.

## Credits

Made with [createapp.dev](https://createapp.dev/)

# Artist Project

This project allows users to search for their favorite artist, view their details and events they have.
I've made this project in React.Js and its bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This website is deployed on Netlify you can view the website in here
https://artistevents.netlify.app/

## _Run the project_

In the project directory, you can run:

### `npm install`

To install all the packages first, then do

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Design ✍

The design part of the project took me 2 and a half days, because I wanted to make something that is not just a place to search into an input field. But it should also look and feel artistics too, so the end users really knows that they are in the right place and searching for their favorite `artist` & their `events`🎶.

I created the design on Figma you can view the design in [here](https://www.figma.com/file/rrDfBheTe6HemfTxJiV8Ye/Artist?node-id=0%3A1)

I first visited my favorite design websites `Behance` & `Dribbble` because it has alot of creative work and I really get inspired by these amazing creators work. 
1. First I created the Moodboard, imaginig different things and ideas that would go into the website.
2. Then I choose the typography and defined the fonts
3. Then I created my logo assets, I created my own logo.
4. Then I started created all the design for my 3 pages
4.1. Home
4.2 Artist
4.3 Events

#### Home Page

This is the first page that is shown to the user, with a nice image and text that shows the purpose of the website to allows the user to view their favorite artist events. In this page a `Search Now` button is provided to the end users, on clicking the button they are taken to the artist page where they can search for their favorite artist.

On further scrolling this page, the end user can also see the top artist events and clicking on them takes them directly to the _Events page_.

#### Artist Page

In this page end users can search for their favorite artist by typing their name in the input field. If its the end user first time on the website and they haven't done any searches then they would be shown a nice UI, that displays on the screen `Search your favorite artist`.

If the user search for their favorite artist they would be shown a nice card that shows the image & name of artist, along with a badge of artist. On clicking the card the user is taken to the events page that shows the upcoming events of artist

#### Events Page

In this page end user can view their favorite artist events, if the artist name is not searched then a nice fallback UI is shown, that dispalys on the screen `Select an artist to see events`.

On selecting the artist, the end user is shown the artist details like image, name, and their social media icons like `facebook, spotify, youtube and more...` on click the icon the user is taken to that link on the new tab.
If the artist has any upcoming events then they are shown those other than that `No Events` is displayed on the screen. There is also a input field in the events page that allows the end user to filter the artist events.

## Development & Build 💻

This project is made in React.Js and tools and technologies used in the project are following:

1. react-router-dom (For routing)
2. Sass (For styling)
3. react-feather (For icons)
4. moment (For date formating)
5. and some other react specific packages that come with react when creating a project

* On the __Artist Page__, when a end user click on the searched artist then 2 things happen first the end user is taken to the events page of that artist and second their data is also saved in _`local storage`_. So when they close the website or visit the artists page again they would be shown the artists in their recent searched. 

To create the build file, you can run the below command on your terminal in the project directory

### `npm run build`

Which makes `build folder` in your project directory.

## Deploy 👨‍💻 

I deployed the website on `Netlify`, which provides free deployment for website. It's so simple and easy I deployed the website manually but there are other ways too. Simply drag and drop your build folder and it takes some time in uploading and then within a minute your website is deployed and ready to be share with the world 🌍.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Initial Setup

Clone the repo locally onto your machine<br/>
&nbsp;&nbsp;&nbsp;• Using a terminal window, navigate to a destination of your choice and type the following to ge the project up and running<br/>
&nbsp;&nbsp;&nbsp;• `git clone https://github.com/Hunsdale1/kairos.git`<br/>
&nbsp;&nbsp;&nbsp;• `cd kairos`<br/>
&nbsp;&nbsp;&nbsp;• `yarn` OR `npm install` (depending on your preference)<br/>
&nbsp;&nbsp;&nbsp;• `yarn start` OR `npm start`<br/>

## Design Choices

Typescript was employed in this application to enforce strong typing with the intention of reducing mistakes and maximizing production during code compilation. <br/>
It also allows for more seamless collaboration among teams.<br/>

GraphQL and Apollo were employed for similar reasons to TypeScript: strong self-documentation ... much stronger than a REST API anyway. <br/>
Using tools like GraphiQL, an IDE like experience allowed for rapid establishing of the schema using `CTRL + SPACE`.<br/>
The Apollo Client was also a tool that boosted productivity in that it provided hooks ready to fit into light-weight functional components.<br/>
As the data was immutable, there was no need to duplicate it onto a local state as Apollo's `useQuery` provided its own state.<br/>
Alongside this, there were very helpful `loading` and `error` properties on Apollo's client object; each of which update the app's user interface<br/>

The colour scheme and the fonts were established by replicating the styles of the Kairos website (https://www.kairostech.io/). <br />
The fade animations of the tiles and loading component aim contribute to a pleasant user experience.<br />

The choice to present the data of the SpaceX Launches was solely down to the rich embellishment of their GraphQL schema and resources;<br />
if the Rick and Morty Schema was richer that would have been the top pick 😎<br/>

The SpaceX Launches API possesses a robust GraphQL API when compared to some of other public GraphQL API's and they also supply professional images; <br/>
as a result, this project seemed to be the most convenient to work with. <br/>

Initially, the web app had a flex layout with a flex-wrap which would have rendered multiple tiles on one row; <br/> the reason this was changed was because the scrolling functionality was less jittery with a more seamless vertical flow of tiles. <br/>

The app has been tested on Google Chrome, Firefox, and in Chrome on a Google Pixel 2 XL.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

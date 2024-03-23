# Personal Portfolio
A personal portfolio website built with React and ChakraUi

Live demo: [http://kn8dev.com](http://kn8dev.com)

## Features:

- Dark / Light themes according to user's system setting (defaults to light)
- Responsive
- Single-page site
- Contact form using EmailJS - not requiring a backend
- Animated background
- Projects populated from array within the `Projects.js` component
- Skills populated from array within the `Skills.js` component
- Drawer displaying additional projects.
 

Number of projects on page/drawer can be customized by changing: 
`
const  drawerBreakpoint  =  5` in `./Components/Projects.js`

## How to use:

1. Clone this repository.
2.  Installation:  `npm install`
3.  In the project directory, run:  `npm start`
4. Open  [http://localhost:3000](http://localhost:3000/)  to view it in the browser. The page will reload if you make edits.

To get the contact form working without a backend,  create an account on [emailjs.com](http://emailjs.com). Add an `.env` file in the root directory to store `REACT_APP_EMAIL_SERVICE=`, `REACT_APP_EMAIL_TEMPLATE=`, `REACT_APP_USER_ID=`, which you will get from EmailJS once you set up your account and template.

For instructions on deploying to gh-pages, follow this guide: https://github.com/gitname/react-gh-pages

**Libraries used in this project:**

 - React
 - Chakra UI
 - EmailJS
 - react-player
 - react-cypher-text-loop
 - react-icons
 - framer-motion
 - gh-pages

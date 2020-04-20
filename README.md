# Bookmark Manager

This web app imitates a bookmark manager.

- Users can add a bookmark to the list.
- Bookmarks output as clickable hyperlinks.
- Users can delete an existing bookmark to the list.
- There is validation in the form to only allow website urls as valid entries, or an error will be thrown.
- Users can edit their existing bookmarks.
- Users list will be stored in localStorage so data is immutable

### Installation

- App is deployed at https://bookmark-react.herokuapp.com/

```
git clone https://github.com/Gia1987/bookmark-react.git
cd bookmark-react
npm run install
npm run start
```

### Tech Stack

- React.js using its [create-react-app](https://github.com/facebook/create-react-app)
- Javascript, HTML, JSX
- SASS styling
- ESlint and Prettier

### Planning

After some diagramming I outlined my plan;

1.  Environment setup - Setting up react using [create-react-app ](https://github.com/facebook/create-react-app), setting up Prettier and ESlint.

2.  Start by making the Header component, and updating styles to index.js and App.js.

3.  Create the form for the user to input the data in. Data will be sent to the parent to update the state, and then render it to the page.

4.  Implement ability to remove and edit links.

5.  Link up all components to the parent component and make sure all the functionality is working.

6.  Make the data persist.

7.  Bug fixing and refactoring.

8.  Deploy to Heroku.

### Quality Control

I tried to adhere to good coding practices in this project.

- Descriptive Naming for functions and variables.
- Separated concerns by structuring code into components.
- Balancing out refactoring to minimise repetative code, but at no cost to its readability.
- Using ES6 Javascript syntax throughout.
- Using Hooks according to the new version of React.
- Following ESlint suggestions and making them pass.
- Small Git commits and good commit descriptions.

### Challenges

I spent some time getting used to React Hooks expecially using UseEffect when I was trying to retrieve links from the localStorage.

I was struggling with Heroku because of an error H10 was cousing my app crashing. At the end, after some research, I figured out that I was not running the right command To initialise an Heroku's app when using create-react-app tool.

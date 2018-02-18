# Youtube Search

DEMO  [https://youtube8777.herokuapp.com/](https://youtube8777.herokuapp.com/)

Small react app allowing users to search youtube and play videos in embedded player. 
App is bootstraped with create react app.
Using Redux, Redux-saga, React-router v4 (just implemented with one route), redux-persist.
It uses reactstrap for bootstrap 4 react components and sass for styles.
## Install

You need NodeJS installed. Just clone the repository and run
```
npm install
npm start 
```

This starts development build.
You can also use yarn. 

## Caveats

I have got one week for this app and not much of the free time.

TODO:
- Responsive design 
- Not using react-google-login and implement gapi client oauth because then the gapi library could be used for api calls.
- use gapi client or fetch call to api insted of youtube-finder package
- Make sidebar stateless component, it is not necessary for it to be connected to redux store
- refreshing like counts after like button is clicked.
- better typing for api objects in state

### Oher

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


Licence MIT.
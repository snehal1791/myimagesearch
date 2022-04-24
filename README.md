# Summary

Search Image is a gallery created using React, HTML and CSS. The images were displayed using the Imgur API.

## Folder Structure
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Custom Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── SearchImages.js # Used for header and Search bar section.
    ├── ListOfImages.js # Used for displaying images on search.
    ├── ImageView.js # Used for displaying each image.
    ├── ImageFullView.js # Used for displaying image in a full screen.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── utils.js 
    │   ├── ImagesAPI # A JavaScript API for the images. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── search-solid.svg
    │   ├── times-solid.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## Imgur API

[`ImagesAPI.js`](src/ImagesAPI.js) contains the methods need to perform necessary operations on the backend:

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of images objects.
* This collection represents the images currently matching the search term in the search bar of the app.

## Future Enhancements

1. Open the image in a dialog

2. Add pagination with previous/next buttons

3. Clean Code, improve CSS and React

4. Append common keywords for images below search bar to search for those images



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

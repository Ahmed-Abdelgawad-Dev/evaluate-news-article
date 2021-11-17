Udacity Advanced Front-End Nano Degree Certificate Link:
## https://graduation.udacity.com/confirm/ACZVDQA5

# Evaluate A News Article.

project at [Udacity](https://www.udacity.com/course/react-nanodegree--nd019) Advanced Front-End Nanodegree Program.

This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then displays sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

## Build Tools
* HTML
* CSS  
  * **Note:** Simple SCSS styling is used as the main goal of the app is working with WEBPACK.
* JavaScript
* Node
* Express
* Webpack
* Meaning-cloud API
* Jest
* Workbox 

## Installation Notes:
* Node and npm must be installed and Node v14 or 14+ to avoid errors.

* Get an API key after signing up at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account) 

* Create a new `.env` file in the root of your project

* Fill the `.env` file with your API key like this:
    * MEANING_CLOUD_API_KEY= *****
      * **Note** API key was left on the server terminal in purpose in case you want to try it rapidly. 
    * API_URL=https://api.meaningcloud.com/sentiment-2.1

### Start The Project
- `git clone https://github.com/Ahmed-Abdelgawad-Dev/evaluate_news_article.git`
- `cd evaluate_news_article`
- `npm install`
- `npm run start to run the Express server on port 8081`
- `npm run build-dev to start the dev server`
- `npm run build-prod to generate a dist folder for prod`
- `npm run test to run all tests`

**Note:** If server does not work because the port is used type  `pkill -9 node` then try to run the server again.

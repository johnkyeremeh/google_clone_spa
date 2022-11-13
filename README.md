# Take Home Exercise

## Problem
As part of this take home exercise, my task was to work with  some of the some pieces of the technical stack, while building a Single Page Application (SPA) in React (with Django serving as the API back end).

The amount of time that was spend on this assignment was up to me.  

### Tasks
- Build a simple interface similar to Google Search
- The home page of your app shows a list of search results based on the search term entered
- A user should be able to click on each of the search results
- Once you're done, create a pull request against the `master` branch with your changes



## Installation
- Install Python 3 and pip (from [here](https://www.python.org/downloads/) and [here](https://pip.pypa.io/en/stable/installing/) if needed)
- Install Node.js and npm (from [here](https://nodejs.org/en/download/) if needed)
- Install [virtualenv](https://virtualenv.pypa.io/en/stable/installation/)
- Clone this repo and change directory to the project root
- Create a virtual environment `.venv` (using `python -m virtualenv .venv`)
- Activate the `.venv` virtual environment using `source .venv/bin/activate`
- Run `pip install -r requirements.txt`
- Run `npm install`

## Running the app

- At the project root, make sure you've activated the `.venv` virtual environment
- Run `npm start:front-end` in one terminal window - this runs [Parcel](https://parceljs.org/) (our packager of choice over Webpack) to build/run the front-end
- The front-end app should now load on http://127.0.0.1:3000
- In a second terminal window, run `npm start:back-end` 
- The Django app will load on http://127.0.0.1:8000 


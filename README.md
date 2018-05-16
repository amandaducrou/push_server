# Push Notification Server for PWA

## Install Dependencies
`npm i`

## Create Vapid Keys

`npm run-script vapid`

## Run

`npm start`

Server will be running on port 3333

## Send Notification

`curl -X POST -d "<notification text>" http://localhost:3333/push`

## Run test client

In "client" directory:

`python -m SimpleHTTPServer 8888`

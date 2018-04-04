# Test App

My CV in React + GraphQL + node.js mode (-:

It was a test task at one of the interviews

It isn't real app, because it doesn't use any DBs, only represents my CV in different form.

But it is real app, because it works! (-:

What this app has:

* react 16.3
* react-apollo 2.1.8
* express 4.16.3, apollo-server-express 1.3.4
* react-router 4.2.2
* react-bootstrap 0.32.1
* etc.

What it doesn't have:

* no DB, only stubs in resolvers (this why I call it not "real" app)
* no redux, too simple app
* no SSR
* no GrphQL mutations, subscriptions

But it works! (-:

## Getting Started

* First of all: MeteorJS still alive! :

          curl https://install.meteor.com/ | sh

* Clone repo:

          git clone https://github.com/n0ne/cv.git

* Change folder :

          cd cv/

* Install packages:

          meteor yarn install  or meteor npm install

* Run app:

          meteor --port 3020

* Open in browser:

          http://localhost:3020

And in result something like this...

![In result must be something like this](https://github.com/n0ne/cv/blob/master/CVapp.png)

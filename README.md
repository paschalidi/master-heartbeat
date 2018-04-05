# master-heartbeat
The code challenge for HeartBeat

## Contents

- [Installation](#installation)
- [Run](#run)
- [GitHub Token position](#token)


## Installation
* To manually install the project to your local machine please follow the next steps.
    ``` sh
    git clone https://github.com/paschalidi/master-heartbeat.git <your-project-folder>
    cd <your-project-folder> 
    npm run install
    ```
The above commands will install all the dependencies you need in order to run the project.

In case npm run is not installed in your machine go [here](https://yarnpkg.com/lang/en/docs/install/).

## Run
* To run the application for developent purposes 
    ``` sh
    npm run dev
    ```
* To run the application for production purposes
    ``` sh
    npm run start

## Token
* To change the token and be an Authorised user so you can use Github's API/v4 you need to add your token
here
```
<your-project-folder>/lib/initApollo.js#8
```
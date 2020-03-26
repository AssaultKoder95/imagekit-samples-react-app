# IMAGEKIT REACT SDK DEMO

This demo app demonstrates the usage of ImageKit's React SDK.

## Prerequisites
The demo app is built using the following dependencies. Make sure to have your system's configuration match the requirements:

- Node: 10.16.3
- Yarn: 1.19.1


## Installation
You can clone the repo in your local development environment and install the packages using `yarn install-packages`.

We have bundled a basic implementation of server as well for the authentication URL, this command installs the packages for that as well.

The default port for the app is 3000 whereas for the for the server is 5500.

## Configuration

You will need to update the `src/App.js` with your public key, url endpoint and authentication endpoint.

**Note: The current authentication endpoint is implemented inside the server folder.**

The server requires credentials to properly generate signatures for upload.
To update the same, head over to `server/index.js` and here you can find placeholders for public key, private key as well as url endpoint.
Populate the same and you will be able to generate signatures correctly.

## Running the app

The demo app can be started using `yarn start`.

## What does this demo include ?
write about the features I have implemented in it and where to find what.

dynamic file upload - half done
CSS fix
readme file - half DONE
responsive images
----------------------------------------------------------------
smart crop better example
manual cropping better example

NOT COVERED - background images by IK

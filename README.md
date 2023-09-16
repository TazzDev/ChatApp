# Chat App

A simple chat application client.

## Dependencies

This app has been done entirely using CRA-Typescript.
 * React
 * TypeScript
 * Styled Components
 * React Framer Motion

## Setup

The entire project has been done with Node v19.9.0 (LTS) and npm v9.6.3. 

If you're on OSX (Mac) please run
```bash
nvm use
```

or for windows, make sure you're on the right node and npm versions. You can run 
```bash
node -v
npm -v
```
to see which versions are installed

then run 

```bash
npm install
```

Also, please modify the .env file with the API URL and API token to connect to the Bunq Backend

## Running the app

Once the setup is done, simply run 
```bash
npm run start 
```
to start the web app. 

## Testing

-Placeholder

## Retrospective

* The implementation of polling has been done to simulate a real-time experience. Since this is a realtively low-load scenario this approach was fine. But for cases where it falls short because of factors like really low-latency requirement or server load, implementing web sockets or long polling or SSE would work better depending on the use-case.
    * Another side effect of polling that could be improved is an exponential backoff, where if an API call fails then the subsequent API call would only be made after delay * 2. This would help reduce hitting the server unnecessarily if there ever is an outage. 
* An authentication service would improve user experience and be able to dynamically sign in - currently this is hardcoded since the requirement just was to login.

### Testing credentials

 Username: admin
 Password: admin

### Author

Thomson M. - For Bunq Assessment



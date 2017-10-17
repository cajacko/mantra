# Mantra App

React Native app for recording, discovering and remembering awesome lessons in life.

## Testing
Run the test suite with:
```
yarn test
```
This will run eslint for linting, jest for unit tests and cucumber.js for functional and end to end testing. This command should be run just before finishing off and merging any branch.

During development you can use:
```
yarn test:watch
```
To run jest in watch mode. When writing jest unit tests put all test files under a \_\_tests\_\_ directory.

If using jest snapshots, make sure to always use shallow rendering and use getRenderOutput to only take snapshots of the actual markup. Everything else should be unit tested without snapshots. As snapshots are a very loose way of describing the codes functionality, so it should only be used to help test markup structure and styling. e.g.
```
import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Component from '../Component.render';

describe('Component.render', () => {
  test('Renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Component />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
```

## Suggestions
At the moment suggestions are hardcoded in. There is a script:
```
yarn suggestions:get
```
Which pulls in all the marked suggestions from the Contentful example database and randomises the suggestions. To make this work you need to put in your contentful space ID and access token in ~/.env. You can see an example .env at ~/.env-sample.

## Branching

This project follows git-flow for branching and we've implemented a helper script to perform some commmon tasks.
```
yarn git
```
This starts an interactive prompt, asking you whether you want to start/finish features/releases and hot fixes. On top of running the git commands it also adds some validation and automatic naming.

- The new feature action will create a new feature branch based off the trello card currently in the "doing" column. Helping to enforce and speed up naming.
- The finish feature action will finish the feature after you have gone through the manual checklist of best practices. Using the cj-checklist module.
- The new feature action creates a new feature automatically based on whether it is a patch/minor or major version
- The finish feature action will finish the feature after running the manual checklist again.

## Publishing the app
There are 2 main ways to publish. Publish to expo, which bundles the JS and serves it from Expo's servers, the next time someone opens the app, the new bundle will be downloaded and served without the app requiring an update from the App Store.

The other way is to publish the app to the App Store. This is mainly to be used when the version of the expo SDK has changed, which requires an App Store submission. This way takes much longer to build, and upload the bundle to the App Store. And then you have to get it approved in the App Store which could take a while. The benefit with this way is that the actually app is fully updated, so when a user downloads it from the App Store it has all the latest code and doesn't require an internet connection to pull the latest from expo. This is also the only way to have a change log in the App Store. Unless you put it in the app description. In an ideal world all updates would be done this official way but it just takes too damn long.

There are also 2 versions of each way of publishing. A dev and a live version. Which targets different apps.

### Global setup
For either of the publishing commands you will need to have node installed and have run yarn to install all packages. You also have to have the packager running as an additional process. This is started automatically if you have done a "yarn start". Otherwise run "yarn expo" to start the packager.

You will also need to have an account with expo and be logged in. Which you can do with:

```
yarn login:expo
```

### Expo - Publishing src changes only
#### Dev
```
yarn publish:dev
```

#### Live
```
yarn publish:live
```

#### Seeing the changes
When either of the dev or live publish commands have been run, you can then open the corresponding app, the bundle may download in the background, in which case you won't see changes until the second time you open the app. You may need to force close the app, if you want to see these changes straight away.

#### How it works
Each command switches the app.json for the desired environment then runs "exp publish" which bundles and uploads the js to the expo servers, which will then distribute that to peoples apps.

### App store - Publishing changes to expo SDK
#### Setup
Additionally to the global setup you will need to install fastlane. Which handles uploading the build file to iTunes Connect for the App Store. You will also need an Apple Developer subscription and have setup an app and bits on iTunes connect.

Create a ./.env based off ./.env-sample and add your own values. Can't remember where you find APPLE_TEAM_ID and FASTLANE_TEAM_ID or why they are different values. Will update this when I find out. If you are me you can find these details in 1Password under iTunes connect.

If you have not run either of these builds before it is worth doing the steps manually first, as expo and fastlane will prompt you for some info, which as of yet I can't get it all to work in non-interactive mode based of .env variables :(
These are the steps to run manually if you need to:
```
# This may ask whether you want expo to handle certificates
# and push notifications. Say yes
yarn build:ios

# Keep running this until the build url shows
yarn build:status

# Download the build to ./tmp/build.ipa

# May ask for your apple password to login to iTunes Connect
# Replace APPLE_ID and FASTLANE_TEAM_ID
fastlane pilot upload -u APPLE_ID -q FASTLANE_TEAM_ID -i ./tmp/build.ipa
```

If you have problems running the build scripts, you many need to run the manual steps again to update credentials.

#### Dev
```
yarn publish:appstore:dev
```

#### Live
```
yarn publish:appstore:live
```

#### Next steps
There's only so much we can automate/have found out how to automate. When the build is successfully uploaded, you should receive an email from Apple about the build being ready. From here you can login to iTunes Connect and handle whether to release the build to TestFlight or release it.

## Manual Checklist
```
yarn Checklist
```

This command runs a manual checklist of things to remember to do during feature development. Mainly to use when finishing a feature and just before making a pull request/merging to dev/master.

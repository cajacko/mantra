# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

* Can add a source to a mantra item, which includes a mandatory title and optional link
* Added a settings page with a prefill source option

### Changed

* Started shifting components into new file structure
* Swapped the side menu to use the one from native-base

### Deprecated

### Removed

### Fixed

## [0.7.1] - 2017-11-01

### Fixed

* Show close icon when there is search text, but the search input is blurred. Previously would show the search icon.

## [0.7.0] - 2017-11-01

### Added

* Search component to filter mantra based by title
* Can clear the contents of the search input
* Search icon focus's on the input
* If no mantra items are visible, then show a message
* Added search considerations to the manual checklist

### Changed

* Current version is always returned by the version reducer
* Split returnMantraLoop into helper function to improve readability
* Split LoopView into LoopView.render and LoopView.component

### Removed

* Migration scripts that would ensure data integrity when upgrading the app. These weren't implemented effectively and were removed so we could have a better version reducer. This will be reintroduced in a better way, next time a data structure change gets made.

## [0.6.0] - 2017-10-31

### Added

* Application version number displays at the bottom of the side menu
* Can now choose to auto push develop/master branches and release tag when finishing a release with the git script

### Changed

* Split Menu component to follow container/component/render/style pattern

## [0.5.5] - 2017-10-30

### Added

* Ability to cancel receiving network responses via acceptableRequests reducer
* New fetcher helper, to be used for all network requests

### Changed

* LOGOUT action is now a top level reducer that resets everything when called. To stop bugs being introduced later.
* Now use `yarn install` rather thatn `npm i` in `yarn publish:live`
* Updated fuzzy package versions to exact for contentful and expo

### Fixed

* https://trello.com/c/tcTcnpsg - Logout/login bug where if you logged out/in as a different user, whilst your mantra were syncing. Then the new user would receive the other persons mantra.

### Security

## [0.5.4] - 2017-10-27

### Added

* Build process for Android devices
* Privacy statement

### Changed

* Build process now switches between ios and android

## [0.5.3] - 2017-10-27

### Changed

* Ask whether should delete release branch on finish

### Fixed

* Android styling for the AddInput

## [0.5.2] - 2017-10-17

### Fixed

* Unintended resolve in the expoBuild.js script was breaking the build

## [0.5.1] - 2017-10-17

### Added

* Added exp as a local package, so it doesn't rely on it being globally installed

### Changed

* Added expo publish command before deploying to app store, so expo online is up to date

## [0.5.0] - 2017-10-17

### Added

* A count for the manual checklist, so you know how many items you have left
* Added cj-checklist as a dependency
* Added manual functional tests via cucumber.js
* Added flow setup, but haven't fully implemented the scripts. It is there if you need it though.
* Added a static JSON list of suggestions, taken from example database in Contentful
* Added script to automatically pull in and randomise new suggestions from Contentful. Still hardcodes them though. No AJAX yet.

### Changed

* Git script will ask if you have run the tests when finishing feature/release
* Removed permenant redux storage of suggestions, so it only ever shows the latest from the code

### Removed

* Removed checklist check for having run feature tests. This is covered in npm/yarn test

### Fixed

* Passed eslint errors on all files
* Fixed broken jest setup

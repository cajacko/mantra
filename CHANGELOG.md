# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Build process for Android devices
- Privacy statement

### Changed
- Build process now switches between ios and android

### Deprecated
### Removed
### Fixed
### Security

## [0.5.3] - 2017-10-27
### Changed
- Ask whether should delete release branch on finish

### Fixed
- Android styling for the AddInput

## [0.5.2] - 2017-10-17
### Fixed
- Unintended resolve in the expoBuild.js script was breaking the build

## [0.5.1] - 2017-10-17
### Added
- Added exp as a local package, so it doesn't rely on it being globally installed

### Changed
- Added expo publish command before deploying to app store, so expo online is up to date

## [0.5.0] - 2017-10-17
### Added
- A count for the manual checklist, so you know how many items you have left
- Added cj-checklist as a dependency
- Added manual functional tests via cucumber.js
- Added flow setup, but haven't fully implemented the scripts. It is there if you need it though.
- Added a static JSON list of suggestions, taken from example database in Contentful
- Added script to automatically pull in and randomise new suggestions from Contentful. Still hardcodes them though. No AJAX yet.

### Changed
- Git script will ask if you have run the tests when finishing feature/release
- Removed permenant redux storage of suggestions, so it only ever shows the latest from the code

### Removed
- Removed checklist check for having run feature tests. This is covered in npm/yarn test

### Fixed
- Passed eslint errors on all files
- Fixed broken jest setup

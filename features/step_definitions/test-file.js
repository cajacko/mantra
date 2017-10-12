/* eslint require-jsdoc: 0 comma-dangle: 0 */

const { defineSupportCode } = require('cucumber');
const {
  getFailedIndex,
  getCurrentIndex,
  setCurrentIndex,
} = require('../support/failedIndex');

function supportCode({ Given }) {
  Given(/.*/, () => {
    const failedIndex = getFailedIndex();
    const currentIndex = getCurrentIndex();

    if (failedIndex === currentIndex) {
      return Promise.reject('Manually failed step');
    }

    setCurrentIndex(currentIndex + 1);

    return Promise.resolve();
  });
}

defineSupportCode(supportCode);

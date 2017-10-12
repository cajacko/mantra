let failedIndex = null;
let currentIndex = 0;

exports.getCurrentIndex = () => currentIndex;

exports.setCurrentIndex = (index) => {
  currentIndex = index;
};

exports.getFailedIndex = () => failedIndex;

exports.setFailedIndex = (index) => {
  failedIndex = index;
};

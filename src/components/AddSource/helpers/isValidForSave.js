import isUrl from 'is-url';
import toast from 'helpers/toast';

const isValidForSave = ({ link, title }, setState, defaultErrorState) => {
  const errorState = Object.assign({}, defaultErrorState);
  let errorMessage = null;

  if (!title.length && !link.length) {
    return true;
  }

  if (title.length && !link.length) {
    errorState.linkError = true;
    errorMessage = 'Add a link for this title';
  } else if (link.length && !title.length) {
    errorState.titleError = true;
    errorMessage = 'Add a title for this link';
  }

  if (link.length && !isUrl(link)) {
    errorState.linkError = true;
    errorMessage = errorMessage ? `${errorMessage}. ` : '';
    errorMessage = `${errorMessage}Link is not a valid URL`;
  }

  if (!errorMessage) return true;

  setState(errorState);

  if (errorMessage) {
    toast(errorMessage, 'warning');
  }

  return false;
};

export default isValidForSave;

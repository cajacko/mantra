import isUrl from 'is-url';
import toast from 'helpers/toast';

const isValidForSave = ({ link, title }, setState, defaultErrorState) => {
  const errorState = Object.assign({}, defaultErrorState);
  let errorMessage = null;

  const hasTitle = !!title && !!title.length;
  const hasLink = !!link && !!link.length;

  if (!hasTitle && !hasLink) return true;
  if (hasTitle && !hasLink) return true;

  if (hasLink && !hasTitle) {
    errorState.titleError = true;
    errorMessage = 'Add a title for this link';
  }

  if (hasLink && !isUrl(link)) {
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

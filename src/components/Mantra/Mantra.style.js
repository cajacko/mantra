import { BOTTOM_OFFSET } from 'components/AddButton/AddButton.style';

const horizontalSpacing = 10;
const verticalSpacing = 20;

export default {
  container: {
    paddingLeft: horizontalSpacing,
    paddingRight: horizontalSpacing,
    paddingTop: verticalSpacing,
    paddingBottom: verticalSpacing,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
  },

  text: {
    fontSize: 20,
  },

  last: {
    marginBottom: BOTTOM_OFFSET,
    borderBottomWidth: 1,
  },
};

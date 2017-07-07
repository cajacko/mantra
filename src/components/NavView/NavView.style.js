import { GREY_LIGHT, GREY_LIGHTER } from 'constants/colours';
import { ICON_SIZE } from 'components/NavButton/NavButton.style';

export default {
  container: {
    flex: 1,
  },

  children: {
    flex: 1,
  },

  nav: {
    height: ICON_SIZE + (ICON_SIZE * 0.4),
    flexDirection: 'row',
    backgroundColor: GREY_LIGHTER,
    borderColor: GREY_LIGHT,
    borderTopWidth: 1,
  },
};

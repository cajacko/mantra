import { GREY_LIGHT } from 'constants/colours';

const size = 36;
const iconSize = 26;

export default {
  iconSize,

  container: {
    backgroundColor: GREY_LIGHT,
    borderRadius: size / 2,
    height: size,
    width: size,
  },

  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

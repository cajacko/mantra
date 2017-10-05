import { GREY_LIGHT } from 'constants/colours';

const size = 36;
const iconSize = 26;

const container = {
  height: size,
  width: size,
};

export default {
  iconSize,
  container,

  containerBackground: {
    backgroundColor: GREY_LIGHT,
    borderRadius: size / 2,
    ...container,
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

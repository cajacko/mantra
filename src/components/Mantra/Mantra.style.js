import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mantra: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#dedede',
    overflow: 'hidden',
  },

  mantraContainer: {
    padding: 20,
    backgroundColor: '#fafafa',
  },

  mantraContainerHighlight: {
    backgroundColor: '#dedede',
  },

  mantraContainerContentHighlight: {
    backgroundColor: '#fafafa',
  },

  mantraContainerWithContent: {
    borderBottomWidth: 1,
    borderColor: '#dedede',
  },

  mantraFirst: {
    borderTopWidth: 1,
  },

  mantraLast: {
    marginBottom: 100,
  },

  mantraTitle: {
    fontSize: 20,
  },

  description: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 24,
  },

  editFooter: {
    flex: 1,
    flexDirection: 'row',
  },

  editButtonView: {
    flex: 1,
  },

  editButton: {
    textAlign: 'center',
    fontSize: 20,
    color: '#8e8e8e',
  },

  editButtonHighlight: {
    color: 'black',
  },

  removeButtonView: {
    flex: 1,
  },

  removeButton: {
    textAlign: 'center',
    fontSize: 20,
    color: '#8e8e8e',
  },

  removeButtonHighlight: {
    color: 'black',
  },

  editDivider: {
    fontSize: 20,
    color: '#8e8e8e',
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#dedede',
    paddingBottom: 20,
    marginBottom: 20,
  },

  contentContainer: {
    padding: 20,
    position: 'absolute',
  },

  contentContainerShow: {
    position: 'relative',
  },
});

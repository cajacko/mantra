import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
  linkTitle: {
    fontSize: 30,
    paddingBottom: 20,
  },

  linkEdit: {
    marginBottom: 30,
  },

  linkInput: {
    height: 30,
    fontSize: 20,
  },

  linkInputWrapper: {
    borderWidth: 1,
    borderColor: '#cecece',
    padding: 5,
  },

  addLinkButton: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#dedede',
    borderColor: '#cecece',
    borderWidth: 1,
    width: 160,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },

  deleteMantra: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#dedede',
    borderColor: '#cecece',
    borderWidth: 1,
    width: 160,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },

  deleteLinkButton: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#dedede',
    borderColor: '#cecece',
    borderWidth: 1,
    textAlign: 'center',
  },

  edit: {
    flex: 1,
  },

  titleInput: {
    fontSize: 30,
  },

  contentInput: {
    marginTop: 20,
    fontSize: 20,
  },

  editContent: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 20,
  },

  editNav: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#dedede',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#cecece',
  },

  editNavText: {
    fontSize: 20,
    padding: 10,
  },

  editScroll: {
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },

  list: {},

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

  link: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
  },

  linkBullet: {
    fontSize: 16,
    marginRight: 10,
  },

  linkText: {
    flex: 1,
    fontSize: 16,
    color: '#0065a2',
    textDecorationLine: 'underline',
  },

  linkTextHighlight: {
    color: 'black',
  },

  linkLast: {
    paddingBottom: 0,
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

  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 60,
    width: 60,
    backgroundColor: '#FFEB3B',
    borderWidth: 2,
    borderColor: '#fde400',
    borderRadius: 60,
    shadowOffset: { width: -2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonHighlight: {
    backgroundColor: '#bdaa00',
    borderColor: '#b5a300',
  },

  addButtonText: {
    fontSize: 30,
    lineHeight: 30,
  },

  contentContainer: {
    padding: 20,
    position: 'absolute',
  },

  contentContainerShow: {
    position: 'relative',
  },
});

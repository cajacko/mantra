import { connect } from 'react-redux';
import AddView from 'components/AddView/AddView.component';
import saveMantra from 'actions/saveMantra';
import switchView from 'actions/switchView';
import deleteWithAlert from 'helpers/deleteWithAlert';

const mapStateToProps = ({ items, sources }) => ({ items, sources });

const mapDispatchToProps = dispatch => ({
  saveMantra: data => dispatch(saveMantra(data)),
  back: () => dispatch(switchView('LoopView')),
  deleteMantra: id => deleteWithAlert(dispatch, id),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddView);

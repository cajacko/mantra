import { connect } from 'react-redux';
import Overview from 'components/scenes/Add/Overview/Overview.component';
import { saveMantra } from 'store/mantra/actions';
import switchView from 'actions/switchView';
import deleteWithAlert from 'helpers/deleteWithAlert';

const mapStateToProps = ({ items, sources, settings: { prefillSource } }) => ({
  items,
  sources,
  prefillSource,
});

const mapDispatchToProps = dispatch => ({
  saveMantra: data => dispatch(saveMantra(data)),
  back: () => dispatch(switchView('LoopView')),
  deleteMantra: id => deleteWithAlert(dispatch, id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);

import { connect } from 'react-redux';
import SceneSettings from 'components/scenes/Settings/Settings.render';
import { changeSetting } from 'store/settings/actions';

const mapStateToProps = ({ settings }) => settings;

const mapDispatchToProps = dispatch => ({
  changeSetting: key => value => dispatch(changeSetting(key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SceneSettings);

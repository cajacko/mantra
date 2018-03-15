import { connect } from 'react-redux';
import AddView from 'components/AddView/AddView.component';

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps)(AddView);

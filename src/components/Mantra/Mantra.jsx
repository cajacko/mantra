import React from 'react';
import style from 'components/Mantra/Mantra.style';

class MantraLoop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      description: props.description,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.saveMantra = this.saveMantra.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  saveMantra() {
    this.props.saveMantra(this.state.title, this.state.description);

    if (this.props.temp) {
      this.setState({
        title: '',
        description: '',
      });
    }
  }

  isEdited() {
    if (this.props.title !== this.state.title) {
      return true;
    }

    if (this.props.description !== this.state.description) {
      return true;
    }

    return false;
  }

  render() {
    let save;
    let deleteButton;

    if (this.isEdited()) {
      save = <button onClick={this.saveMantra}>Save</button>;
    }

    if (!this.props.temp) {
      deleteButton = <button onClick={this.props.deleteMantra}>Delete</button>;
    }

    return (
      <article style={style.container}>
        <input
          style={style.title}
          type="text"
          value={this.state.title}
          onChange={this.onTitleChange}
          placeholder="Add mantra title here"
        />
        <textarea
          style={style.description}
          value={this.state.description}
          onChange={this.onDescriptionChange}
          placeholder="Add mantra description here"
        />
        <footer style={style.footer}>
          {save}
          {deleteButton}
        </footer>
      </article>
    );
  }
}

export default MantraLoop;

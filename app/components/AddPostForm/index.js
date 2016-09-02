import React, { Component, PropTypes } from 'react';
import yup from 'yup';
import Form from 'react-formal';

/* component styles */
import s from './styles.css';

const modelSchema = yup.object({
  text: yup.string().required('Text is required'),
});

export class AddPostForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = { model: null };
  }

  handleSubmit = (data) => {
    const { handleSubmit } = this.props;

    this.setState({ model: null });
    handleSubmit(data);
  }
  render() {
    return (
      <section className={s.root}>
        <Form
          schema={modelSchema}
          value={this.state.model}
          onSubmit={this.handleSubmit}
          onChange={model => this.setState({ model })}
        >
          <Form.Field ref="text" name="text" />
          <Form.Message for='text' />

          <Form.Button type="submit">Add</Form.Button>
        </Form>
      </section>
    );
  }
}

export default AddPostForm;


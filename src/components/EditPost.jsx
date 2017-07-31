import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import RenderField from 'components/elements/RenderField';
import { get } from 'lodash/object';

const EditPost = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit} className="ui form">
      <Field label="Title" component={RenderField} type="text" name="title" />
      <Field label="Created At" component={RenderField} type="text" name="createdAt" />
      <Field label="Author" component={RenderField} type="text" name="author" />
      {(!pristine && !submitting) && <button className="ui button" onClick={reset}>Clear</button>}
      <input type="submit" className="ui button primary" value="Update" />
    </form>
  </div>
);

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const submit = (values) => {
  return sleep(1000).then(() => {
    if (values.title.length < 5)
      throw new SubmissionError({ title: 'Рекомендуемая длина заголовка больше 5' });
    else {
      alert(JSON.stringify(values));
    }
  });
};

export default connect(
  (state) => ({
    initialValues: {
      title: get(state, 'post.entry.post.title', ''),
      createdAt: state.post.entry.post.meta.createdAt,
      author: state.post.entry.post.meta.author
    }
  })
)(reduxForm({
  form: 'editPost',
  onSubmit: submit
})(EditPost));

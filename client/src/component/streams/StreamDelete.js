import React, { useEffect } from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

const StreamDelete = (props) => {
  const { id } = props.match.params;
  useEffect(() => {
    fetchStream(id);
  }, []);
  const actions = (
    <>
      <button
        onClick={() => props.deleteStream(id)}
        className="ui negative button"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  const content = !props.stream
    ? "Are You Sure You want To Delete This Stream?"
    : `Are You Sure You want To Delete This Stream with title: ${props.stream.title}`;
  return (
    <Modal
      title="Delete Stream"
      content={content}
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);

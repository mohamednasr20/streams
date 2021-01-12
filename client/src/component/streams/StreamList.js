import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

const StreamList = ({ fetchStreams, streams, currentUserId, isSignedIn }) => {
  useEffect(() => {
    fetchStreams();
  }, []);

  const AdminRender = (id) => {
    return (
      <div className="right floated content">
        <Link to={`/streams/edit/${id}`} className="ui button primary">
          Edit
        </Link>
        <Link to={`/streams/delete/${id}`} className="ui button negative">
          Delete
        </Link>
      </div>
    );
  };

  const listStreams = streams.map((stream) => {
    return (
      <div className="item" key={stream.id}>
        {stream.userId === currentUserId && AdminRender(stream.id)}
        <i className="large middle aligned icon camera"></i>
        <div className="content">
          <Link to={`streams/${stream.id}`}>{stream.title}</Link>
          <div className="description">{stream.description}</div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{listStreams}</div>
      {isSignedIn && (
        <div style={{ textAlign: "right" }}>
          <Link className="ui button primary" to="/streams/new">
            Create Stream
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);

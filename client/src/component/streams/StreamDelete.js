import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );
  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are You Sure You want To Delete This Stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;

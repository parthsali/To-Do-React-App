import React from "react";

export const TodoItem = (props) => {
  return (
    <>
      <div className="task_item">
        <button
          onClick={() => {
            props.deleteTaskFun(props.id);
          }}
          className="cancel_item"
        >
          x
        </button>
        <li className="task_text">{props.val}</li>
      </div>
    </>
  );
};

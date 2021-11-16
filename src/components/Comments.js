import React, { useState } from "react";
import { css } from "@emotion/css";
import db from "../firebase";
import { useParams } from "react-router-dom";
import EditComment from "./EditComment";

function Comments({ comment, user, image, timestamp, id }) {
  const [edited, setEdited] = useState("");
  const [editField, setEditField] = useState(false);
  const { channelId } = useParams();

  const edit = () => {
    db.collection("channels")
      .doc(channelId)
      .collection("comments")
      .doc(id)
      .update({
        comment: edited,
      });

    setEdited("");
  };

  const openEdit = () => {
    setEditField(!editField);
  };

  const edits = (e) => {
    setEdited(e.target.value);
  };

  const deleteComment = () => {
    db.collection("channels")
      .doc(channelId)
      .collection("comments")
      .doc(id)
      .delete();
  };

  return (
    <div
      className={css`
        background-color: #f4f4f6;
        margin: 4px;
        padding: 10px;
        overflow-y: auto;
      `}
    >
      <div
        className={css`
          margin: 6px;
          display: flex;
          align-items: center;
        `}
      >
        <img
          className={css`
            height: 50px;
            width: 50px;
            object-fit: contadfsn;
            border-radius: 50px;
          `}
          src={image}
          alt=""
        />
        <span
          className={css`
            font-size: 10px;
            padding-left: 10px;
          `}
        >
          {new Date(timestamp && timestamp.toDate()).toUTCString()}
        </span>
        <p
          className={css`
            font-size: 14px;
            font-weight: bold;
            color: #7953f5;
            padding-left: 10px;
          `}
        >
          {user}
        </p>
      </div>

      <div
        className={css`
          margin-left: 2rem;
          color: #434b57;
        `}
      >
        <h4>{comment}</h4>

        <div className={css``}>
          <input type="text" value={edited} onChange={edits} />
          <button onClick={edit}>Edit</button>
        </div>
        {/* <div onclick={openEdit}>
                <EditComment />
                </div> */}
        <span
          className={css`
            float: right;
            color: #dddde3;
            cursor: pointer;
          `}
          onClick={deleteComment}
        >
          delete
        </span>
      </div>
    </div>
  );
}

export default Comments;

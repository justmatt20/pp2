import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import db from "../firebase";
import Comments from "./Comments";
import Input from "./Input";
import { css } from "@emotion/css";
import EmailCode from "./EmailCode";

function Chat({ id, title, comment }) {
  const { channelId } = useParams();
  const [channel, setChannel] = useState(null);
  const [messages, setMessages] = useState([]);
  const history = useHistory();

  //     const selectEmails = () => {
  //         if(id){
  //             history.push(`/emails/${id}`)
  //         }else{
  //             history.push(title)
  //         }
  // }

  const getChannel = () => {
    // if(channelId)
    db.collection("channels")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
    console.log(channel);
  };

  const getComments = () => {
    db.collection("channels")
      .doc(channelId)
      .collection("comments")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            comment: doc.data().comment,
            timestamp: doc.data().timestamp,
            image: doc.data().image,
            user: doc.data().user,
          }))
        )
      );
  };

  const deleteChannel = () => {};

  const makeEmails = () => {
    history.push(`/${channelId}/emails`);
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getChannel();
      getComments();
      deleteChannel();
    }
  }, [channelId]);

  return (
    <div className={css``}>
      <div
        className={css`
          position: absolute;
          bottom: 0;
        `}
      >
        <h3
          className={css`
            color: #7953f5;
            margin: 10px;
          `}
        >
          <span className={css``}>#</span>
          {channel?.title}
        </h3>
        <h4
          onClick={makeEmails}
          className={css`
            margin: 10px;
            text-decoration: none;
            cursor: pointer;
          `}
        >
          {channel?.title} Emails
        </h4>
        {/* optional chaining */}
      </div>
      <div
        className={css`
          height: 74vh;
          width: fit;
          position: absolute;
          bottom: 0;
          padding: 20px;
          margin-left: 230px;
          margin-right: 20px;
          padding-bottom: 30px;
          overflow-y: scroll;
        `}
      >
        {messages.length > 0 &&
          messages.map((data) => (
            <Comments
              comment={data?.comment}
              user={data?.user}
              image={data?.image}
              timestamp={data.timestamp}
              id={data.id}
            />
          ))}
        <Input channelTitle={channel?.title} channelId={channelId} />
      </div>
    </div>
  );
}

export default Chat;

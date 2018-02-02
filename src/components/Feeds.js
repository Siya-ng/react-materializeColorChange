import React from 'react';

const Feeds = ({feedsObj}) => {
  return (
    <div>
      <a href={"/topic/" + feedsObj.title.toLowerCase()}><h6> {feedsObj.title}</h6></a>
    </div>
)}


export default Feeds;

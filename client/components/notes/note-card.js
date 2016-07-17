import React, { Component } from 'react';

const NoteCard = ({title, date, content}) => {
  return (
      <div className="col-md-4 col-sm-6 col-xs-12 col-lg-3" >
      <div className="note">
        <p className="title">{title}</p>
        <p className="date">{date}</p>
        </div>
      </div>
  )
}

export default NoteCard;

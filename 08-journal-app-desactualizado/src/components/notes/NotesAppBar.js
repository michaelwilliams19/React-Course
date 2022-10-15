import React from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment';

export const NotesAppBar = () => {
  
  const { activeNote } = useSelector(state => state.notes);
  const { date } = activeNote;
  const noteDate = moment(date);

  return (
    <div className="notes__appbar">
        <span>{noteDate.format('LL')}</span>
        <div> 
            <button className="btn">Picture</button>
            <button className="btn">Save</button>
        </div>
    </div>
  )
}

import React from 'react';

interface RenderDateProps {
   date: Date
}

const RenderDate = ({date}: RenderDateProps): JSX.Element => {
   const year = date.getFullYear();
   const month = date.toLocaleString('default', { month: 'long' });
   const day = date.toLocaleString('en-US', {day: '2-digit'});
   return (
      <div className="date__container">
         <p>{month}</p>
         <p>{year}</p>
         <p>{day}</p>         
      </div>
   )
}

export default RenderDate

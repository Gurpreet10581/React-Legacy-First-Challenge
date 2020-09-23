import React from 'react';
 
const CatList = (props) => {
 return (
   <div>
     {props.breeds.map((cats,index )=> <li key={index}>{cats}</li> )}
   </div>
 )
}
 
export default CatList;

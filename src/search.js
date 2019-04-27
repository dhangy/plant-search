import React from 'react';

export const Search = (props) => {
    return (
      <input className ="input is-success has-text-centered" placeholder= "Start Searching!"type="text" onChange={props.change} name="searchBar" />
    )
}
import React from 'react';

export const List = (props) => {
    let plants = props.plants;
     
    let plantList = plants.map((plant,index) => <li key={index}><a className="has-text-centered is-size-4 is-family-code" name={plant} onClick={props.click}>{plant}</a></li>);
    console.log(plantList);
    return <ul className="menu-list ">{plantList}</ul>;
};
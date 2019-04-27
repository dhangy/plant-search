import React from 'react';

export const List = (props) => {
    let plants = props.plants;
     
    let plantList = plants.map((plant,index) => <li key={index}><a className="has-text-centered" name={plant} onClick={props.click}>{plant}</a></li>);
    console.log(plantList);
    return <ul className="menu-list">{plantList}</ul>;
};
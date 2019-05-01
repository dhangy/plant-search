import React from 'react';

export const Card = (props) => {
    let photo = require(`${props.plant.photo}`);
    let contentTitle = "title has-text-centered is-size-5 has-text-warning has-text-weight-bold";
    let contentSubtitle = "subtitle has-text-centered has-text-white is-size-6";
    let cardTitle = "title has-text-centered has-text-white is-size-2 is-family-code";

    return (
        <div className="card has-background-success">
            <div className="card-image">
                <figure className="image is-square">
                    <img src={photo}></img>  
                </figure>
            </div>
            <div className="media">
                <div className="media-content">
                <p className={cardTitle}>{props.plant.name}</p>
                </div>
            </div>
            <div className="card-content">
                <div className="content">
                    <p className={contentTitle}>Hardiness</p>
                    <p className={contentSubtitle}>The {props.plant.name} is {props.plant.hardy ? "relatively hard to kill" : "relatively hard to keep alive"}</p>
                </div>
                <div className="content">
                    <p className={contentTitle}>Light Requirements</p>
                    <p className={contentSubtitle}>It prefers {props.plant.light}</p>
                </div>
                <div className="content">
                    <p className={contentTitle}>Humidity</p>
                    <p className={contentSubtitle}>This plant {props.plant.humidity ? "needs high humidity" : "does fine in standard indoor humidity"}</p>
                </div>
                <div className="content">
                    <p className={contentTitle}>Watering</p>
                    <p className={contentSubtitle}>This plant likes to be watered {props.plant.water ? "often" : "rarely"}</p>
                </div>
               
                </div>
            </div>
       
    )}


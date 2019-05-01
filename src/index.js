import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { List } from "./list.js";
import { Search } from "./search.js";
import { Plants } from "./plants.js";
import { Card } from './card.js';
import { Message } from './message.js';
import { Navbar } from './navbar';

export class App extends React.Component { 
    constructor(props){
        super(props);
        let plantList = (Plants.map(plant => plant.name)).sort();
        this.state = {
            plantInfo: Plants,
            list: plantList,
            workingList: plantList,
            card: null
        }
    }

    handleChange(e){
        console.log(e.target.value);
        let tempArr = this.state.list.filter(word => word.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({workingList: tempArr});
    }
    
    handleClick(e){
        console.log(e.target.name); 
        let tempPlant = this.state.plantInfo.find(plant => plant.name === e.target.name)
        console.log(tempPlant);
        this.setState({card: tempPlant})
    }

    render() {
        return (
            <div>
                <div><Navbar /></div>
                <section className="section">
                    <div className="columns">
                        <div className="column"></div>
                        <div className="column">
                            <Message />
                            <Search change={(e) => this.handleChange(e)} />  
                            <div className="panel">   
                                <List click={(e) => this.handleClick(e)} plants={ this.state.workingList }/>
                            </div>  
                        </div>
                        { this.state.card && (
                            <div className="column">
                                    <Card plant={this.state.card} />
                            </div> 
                        )}
                        <div className="column"></div>  
                    </div>
                </section>
            </div>  
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


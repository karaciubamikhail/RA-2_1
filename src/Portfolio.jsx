import { Component } from "react";
import { Toolbar } from "./Toolbar";
import { ProjectList } from "./ProjectList";
import { data } from "./data";
export class Portfolio extends Component{
    constructor(){
        super()
        this.state = { activeFilter: 'All' };
        this.onSelectFilter = this.onSelectFilter.bind(this)
    }
    onSelectFilter(e){
        const filter = e.target.textContent;
        this.setState({ activeFilter: filter });
    }
    render(){
        return(
            <div className="container">
                <div class='btns'>
                    <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]} onSelectFilter={this.onSelectFilter} selected={this.state.activeFilter}/>
                </div>
                <ProjectList selected={this.state.activeFilter} data={data}/>
            </div>
        )
    }
}
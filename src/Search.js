import React, { Component } from "react";
import RatingStars from "./RatingStars";


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: "",
      rateUser:0
    };
  }

  searchMovie = event => {
    this.setState(
      {
        searching: event.target.value
      },
      () => this.props.inputSearch(this.state.searching)
    );
  };

  rateMovie=x=>{
    this.setState({
      rateUser:x
    }, ()=>{this.props.searchRating(this.state.rateUser)})
  }


  render() {
    return (
      <div>
      
        <input type="text" onChange={this.searchMovie} />
        <RatingStars rate={this.state.rateUser} searchRate={this.rateMovie}/>
      
      </div>
    );
  }
}

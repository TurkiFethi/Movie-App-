import React, { Component } from 'react'
import{tabListMovies}from '../src/data'
import ListMovies from './ListMovies'
import AddMovie from './AddMovie'
import Search from './Search'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      tabListMovies:tabListMovies,
      searching:"",
      rating:0
    }
  }
  add=(newMovie)=>{
    this.setState({
      tabListMovies:[...this.state.tabListMovies,newMovie]
    })
  }
  searchFilter=(item)=>{
  this.setState({
    searching:item
  })
  }
  searchRate=(item)=>{
    this.setState({
      rating:item
    })
    }


  render() {
    return (
      <div>
        <Search inputSearch={this.searchFilter} searchRating={this.searchRate}/>
        <ListMovies tabListMovies={this.state.tabListMovies} searchName={this.state.searching} filterRating={this.state.rating}/>
        <AddMovie Add={this.add}/>
 
      </div>
    )
  }
}

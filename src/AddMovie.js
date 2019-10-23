import React, { Component } from 'react'

export default class AddMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            rating:"",
            movieImage:"",
            movieName:"",
            movieType:"",
            movieDuration:""
        }
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value

        })
    }

    render() {
        return (
            <div>


<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Add Movie
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" name="rating" value={this.state.rating} onChange={this.handleChange} placeholder="insert rating "/>
        <input type="text" name="movieImage" value={this.state.movieImage} onChange={this.handleChange} placeholder="insert image"/>
        <input type="text" name="movieName" value={this.state.movieName} onChange={this.handleChange} placeholder="insert title "/>
        <input type="text" name="movieDuration" value={this.state.movieDuration} onChange={this.handleChange} placeholder="insert duration"/>
        <input type="text" name="movieType" value={this.state.movieType} onChange={this.handleChange} placeholder="insert type"/>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={()=>this.props.Add(this.state)}>Add Movie</button>
      </div>
    </div>
  </div>
</div>
 
            </div>
        )
    }
}

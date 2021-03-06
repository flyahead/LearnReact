import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import MovieForm from './MovieForm/index';
import MovieList from './MovieList/index';


let DATA = require('./ConstValue');

var data = DATA.DATA;

class MovieBox extends Component{

  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }


  handleMovieSubmit(movie){
    let movies = this.state.data;
    let newMovies = movies.concat([movie]);
    this.setState({data: newMovies});
  }

  render(){
    return(
      <div className="movieBox">
        <MovieForm onMovieSubmit={this.handleMovieSubmit.bind(this)}/>
        <MovieList data={this.state.data}/>
      </div>
    );
  }

}

export default MovieBox;
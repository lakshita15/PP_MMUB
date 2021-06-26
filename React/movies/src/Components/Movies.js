import React, { Component } from "react";
import { getMovies } from "./getMovies";
import axios from "axios";
export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currSearchText: "",
      currpage: 1,
      limit: 4,
      genres: [{ _id: "abcd", name: "All Genres" }],
      cGenre: "All Genres",
    };
  }
  async componentDidMount() {
    console.log("inside component did mount");
    let result = await axios.get(
      "https://backend-react-movie.herokuapp.com/movies"
    );
    let genreRes = await axios.get(
      "https://backend-react-movie.herokuapp.com/genres"
    );
    // console.log(res.data.movies);
    console.log(genreRes.data.genres);
    console.log(result.data.movies);
    this.setState({
      movies: result.data.movies,
      genres: [...this.state.genres, ...genreRes.data.genres],
    });
  }
  handleChange = (e) => {
    let val = e.target.value;
    console.log(val);
    this.setState({
      currSearchText: val,
    });
  };
  onDelete = (id) => {
    let arr = this.state.movies.filter(function (movieObj) {
      return movieObj._id != id;
    });
    // console.log(arr);
    this.setState({
      movies: arr,
    });
  };
  sortbyrating = (e) => {
    let className = e.target.className;

    let sortedmovies = [];
    if (className == "fa fa-sort-asc") {
      sortedmovies = this.state.movies.sort(function (movieobja, movieobjb) {
        //ascending order
        return movieobja.dailyRentalRate - movieobjb.dailyRentalRate;
      });
    } else {
      //descending order
      sortedmovies = this.state.movies.sort(function (movieobja, movieobjb) {
        //ascending order
        return movieobjb.dailyRentalRate - movieobja.dailyRentalRate;
      });
    }
    this.setState({
      movies: sortedmovies,
    });
  };
  sortbysstock = (e) => {
    let className = e.target.className;

    let sortedmovies = [];
    if (className == "fa fa-sort-asc") {
      sortedmovies = this.state.movies.sort(function (movieobja, movieobjb) {
        //ascending order
        return movieobja.numberInStock - movieobjb.numberInStock;
      });
    } else {
      //descending order
      sortedmovies = this.state.movies.sort(function (movieobja, movieobjb) {
        //ascending order
        return movieobjb.numberInStock - movieobja.numberInStock;
      });
    }
    this.setState({
      movies: sortedmovies,
    });
  };
  handlePagechange = (pagenumber) => {
    this.setState({ currpage: pagenumber });
  };
  handleGenreChange = (genre) => {
    this.setState({
      cGenre: genre,
    });
  };
  render() {
    console.log("render");
    let { movies, currSearchText, currpage, limit, genres, cGenre } =
      this.state; //ES6 destructuring
    let filteredArr = [];
    if (currSearchText == "") {
      filteredArr = movies;
    } else {
      filteredArr = movies.filter(function (movieObj) {
        let title = movieObj.title.toLowerCase();
        console.log(title);
        return title.includes(currSearchText.toLowerCase());
      });
    }
    if (cGenre != "All Genres") {
      filteredArr = filteredArr.filter(function (movieObj) {
        return movieObj.genre.name == cGenre;
      });
    }
    let numberofpages = Math.ceil(filteredArr.length / limit);
    let pagenumberarr = [];
    for (let i = 0; i < numberofpages; i++) {
      pagenumberarr.push(i + 1);
    }

    let si = (currpage - 1) * limit;
    let ei = si + limit;
    //slice array->subarray
    filteredArr = filteredArr.slice(si, ei);

    return (
      //JSX
      <>
        {this.state.movies.length == 0 ? (
          <div className="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-3">
                <ul className="list-group">
                  {genres.map((genreObj) => (
                    <li
                      onClick={() => this.handleGenreChange(genreObj.name)}
                      key={genreObj._id}
                      className="list-group-item"
                    >
                      {genreObj.name}
                    </li>
                  ))}
                </ul>
                <h5>Current Genre : {cGenre}</h5>
              </div>
              <div className="col-9">
                <input
                  type="search"
                  value={this.state.currSearchText}
                  onChange={this.handleChange}
                ></input>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Genre</th>
                      <th scope="col">
                        <i
                          onClick={this.sortbysstock}
                          class="fa fa-sort-asc"
                          aria-hidden="true"
                        ></i>
                        Stock
                        <i
                          onClick={this.sortbysstock}
                          class="fa fa-sort-desc"
                          aria-hidden="true"
                        ></i>
                      </th>
                      <th scope="col">
                        <i
                          onClick={this.sortbyrating}
                          class="fa fa-sort-asc"
                          aria-hidden="true"
                        ></i>
                        Rate
                        <i
                          onClick={this.sortbyrating}
                          class="fa fa-sort-desc"
                          aria-hidden="true"
                        ></i>
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredArr.map((movieObj) => {
                      return (
                        <tr key={movieObj._id}>
                          <td></td>
                          <td>{movieObj.title}</td>
                          <td>{movieObj.genre.name}</td>
                          <td>{movieObj.numberInStock}</td>
                          <td>{movieObj.dailyRentalRate}</td>
                          <td>
                            <button
                              onClick={() => {
                                this.onDelete(movieObj._id);
                              }}
                              type="button"
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <nav aria-label="...">
                  <ul class="pagination">
                    {pagenumberarr.map((pagenumber) => {
                      let classStyle =
                        pagenumber == currpage
                          ? "page-item active"
                          : "page-item";
                      return (
                        <li
                          onClick={() => {
                            this.handlePagechange(pagenumber);
                          }}
                          className={classStyle}
                        >
                          <span className="page-link">{pagenumber}</span>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
{
  /* <li className="page-item disabled">
      <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">2</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li> */
}

import React from 'react'
import Searchbar from './components/Searchbar'
import MovieList from './components/MovieList'
import axios from 'axios'

class App extends React.Component {

    state = 
    {
        movies : [],
        searchQuery : ""
    }


    // FETCH İLE DATA FETCHING

/*   async componentDidMount() {     // Fetch asenkron olarak sorgulama yapar bu yüzden de async-await ile kullanmak zorundayız.

        const baseURL = "http://localhost:3002/movies"
        const getData = await fetch(baseURL);
        //console.log(getData)
        const data = await getData.json();  // .json() kullanmazsak Promise dönüyor, datayı dönmüyor.
        //console.log(data)

        this.setState({movies : data})

    } */

    // AXIOS İLE DATA FETCHING

    async componentDidMount() {     

    const response = await axios.get("http://localhost:3002/movies");

    //console.log(response)

    this.setState({movies : response.data})

    }


    deleteMovie = async (item) => {

        // fetch ile delete

      /*   const baseURL = `http://localhost:3002/movies/${item.id}`
        await fetch(baseURL, {
            method : "DELETE"
        }) */

        // AXİOS İLE DELETE

        await axios.delete(`http://localhost:3002/movies/${item.id}`)

        const newMovieList = this.state.movies.filter((movie) => (
            movie.id !== item.id
        ))

       /*  this.setState ({
            movies : newMovieList      // B yazım mevcut bir movie bilgisi olmasaydı mantıklı olurdu
        }) */ 

        this.setState((state) => ({     // Yukarıdakinden farkı : Burada mevcut bir state bilgisi var ve biz onu güncelliyoruz.
            movies : newMovieList
        }))
      }

      changeQuery = (event) => {

        // console.log(event.target.value)

        this.setState({searchQuery : event.target.value})
      }


    render () {

        const filteredMovies = this.state.movies.filter(

            (movie) => {

                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1 
            }
        )

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mt-3">
                    <Searchbar changeQuery={this.changeQuery}/>
                </div>
            </div>

            <MovieList  movies={filteredMovies}  deleteMovie={this.deleteMovie}/>
        </div>
    )
}
}

export default App;

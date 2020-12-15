import React , { createRef } from "react"
import Header from '../src/layout/header'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      playing: false,
      index: 0,
      selectedTrack: null,
      player: "stopped"
    };

    this.playSong = this.playSong.bind(this);
    this.audioPlayerRef = createRef();


  }


  componentDidMount = () => {
    const that = this;

    console.log('hey');
    fetch('songs.json')
    .then(response => response.json())
    .then(data =>
      that.setState({ songs: data })
    );

    this.audioPlayerRef.current.addEventListener("ended",function() {
      console.log('ended');
      that.playNext();
    });


  }

  playNext() {
    let currentSong = this.state.selectedTrack
    this.playSong(currentSong.id + 1)
  }

  playSong(id) {
    console.log('Click happened');
    const filteredObject = this.state.songs.filter(song => song.id === id);
    console.log(filteredObject[0]);
    // this.setState(prevState => {
    //    selectedTrack: filteredObject[0]
    // })

    this.setState(prevState =>{
      return{
           ...prevState,
           selectedTrack : filteredObject[0]
      }
   })
    console.log(this.state);

    this.audioPlayerRef.current.src = filteredObject[0].path;
    this.audioPlayerRef.current.play();
  }

  filterByAlbumName = (albumName) => {
    const filteredObject = this.state.songs.filter(song => song.album === albumName);
    return filteredObject;
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid">

            <div className="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <audio ref={this.audioPlayerRef} controls></audio>

            </div>

            <div className="row">
              <div className="col-sm-6">
                <h3>1. Immortal Technique - Revolutionary Vol. 1</h3>

                {
                  this.filterByAlbumName('Revoltionary Vol. 1').map((song) => {
                    return (
                      <a onClick={() => this.playSong(song.id)}>
                        <li key={song.id}>
                        {song.name}<br/>
                        </li>
                    </a>
                   )})
                }
              </div>
              <div className="col-sm-6">
                <h3>2. Immortal Technique - Revolutionary Vol. 2</h3>
                {
                  this.filterByAlbumName('Revoltionary Vol. 2').map((song) => {
                    return (
                      <a onClick={() => this.playSong(song.id)}>
                        <li key={song.id}>
                        {song.name}<br/>
                        </li>
                    </a>
                   )})
                }
              </div>
            </div>



            <div className="row">
              <div className="col-sm-6">
                <h3>3. Immortal Technique - The First Passage</h3>

                {
                  this.filterByAlbumName('The First Passage').map((song) => {
                    return (
                      <a onClick={() => this.playSong(song.id)}>
                        <li key={song.id}>
                        {song.name}<br/>
                        </li>
                    </a>
                   )})
                }
              </div>
              <div className="col-sm-6">
              <h3>4. Immortal Technique - The Final Passage</h3>

                    {
                      this.filterByAlbumName('The Final Passage').map((song) => {
                        return (
                          <a onClick={() => this.playSong(song.id)}>
                            <li key={song.id}>
                            {song.name}<br/>
                            </li>
                        </a>
                      )})
                    }
              </div>
            </div>


            <div className="row">
              <div className="col-sm-6">
                <h3>5. Immortal Technique - The Silenced Revolution</h3>

                {
                  this.filterByAlbumName('The Silenced Revolution').map((song) => {
                    return (
                      <a onClick={() => this.playSong(song.id)}>
                        <li key={song.id}>
                        {song.name}<br/>
                        </li>
                    </a>
                   )})
                }
              </div>
              <div className="col-sm-6">
              <h3></h3>

              </div>
            </div>

        </div>



      </React.Fragment>
    );
  }
}


export default App

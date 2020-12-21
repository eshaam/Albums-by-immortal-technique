import React , { createRef } from "react"
import Header from '../src/layout/header'
import Album from './components/album'

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
    if (this.state.selectedTrack === null) {
      alert('Please choose a song to play')
    } else {
      let currentSong = this.state.selectedTrack
      this.playSong(currentSong.id + 1)
    }

  }

  playPrev() {
    if (this.state.selectedTrack === null) {
      alert('Please choose a song to play')
    } else {
      let currentSong = this.state.selectedTrack
      this.playSong(currentSong.id + -1)
    }

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

            <div className="row">
              <div className="col-sm-12">
                <p className="text-muted">Immortal Technique is an <a target="_blank" href="https://en.wikipedia.org/wiki/Underground_hip_hop">Underground Hip Hop</a> artist.
                   </p>
                   <p className="text-muted">I have been a student of his music since his first album back in 2001. Encoded is his music is views of the world and its issues in a clever, mind blowing way. </p>
                   <p className="text-muted">This website where you can stream all his tracks is inspired by his last album to date (The Martyr - Burn This), where he calls for those listening burn is music for everyone.</p>
                   <p className="text-muted">Immortal Technique's music has the capability to change thinking and inspire action.</p>
              </div>
            </div>


            <div className="jumbotron">
            <h1 class="display-4">{this.state.selectedTrack === null ? 'Click on a song to start playing' : this.state.selectedTrack.name + ' from ' +this.state.selectedTrack.album  }</h1>
              <div className="row">
                <div className="col-sm-12">
                  <audio ref={this.audioPlayerRef} controls></audio>

                </div>
              </div>

              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary" onClick={() => this.playNext()}>Play Next</button>
                <button type="button" class="btn btn-secondary">Middle</button>
                <button type="button" class="btn btn-secondary" onClick={() => this.playPrev()}>Play Previous</button>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <h3>1. Immortal Technique - Revolutionary Vol. 1</h3>
                <Album data={this.filterByAlbumName('Revoltionary Vol. 1')} playSong={this.playSong} />
              </div>
              <div className="col-sm-6">
                <h3>2. Immortal Technique - Revolutionary Vol. 2</h3>
                <Album data={this.filterByAlbumName('Revoltionary Vol. 2')} playSong={this.playSong} />
              </div>
            </div>



            <div className="row">
              <div className="col-sm-6">
                <h3>3. Immortal Technique - The First Passage</h3>
                <Album data={this.filterByAlbumName('The First Passage')} playSong={this.playSong} />
              </div>
              <div className="col-sm-6">
              <h3>4. Immortal Technique - The Final Passage</h3>
                <Album data={this.filterByAlbumName('The Final Passage')} playSong={this.playSong} />
              </div>
            </div>


            <div className="row">
              <div className="col-sm-6">
                <h3>5. Immortal Technique - The Silenced Revolution</h3>
                <Album data={this.filterByAlbumName('The Silenced Revolution')} playSong={this.playSong} />
              </div>
              <div className="col-sm-6">
              <h3>6. Immortal Technique and Friends - House Resolution 635</h3>
                <Album data={this.filterByAlbumName('House Resolution 635')} playSong={this.playSong} />
              </div>
            </div>


            <div className="row">
              <div className="col-sm-6">
                <h3>7. Immortal Technique and Friends - Warrior Music</h3>
                <Album data={this.filterByAlbumName('Warrior Music')} playSong={this.playSong} />
              </div>
              <div className="col-sm-6">
              <h3>8. Immortal Technique and Friends - Self Education</h3>
                <Album data={this.filterByAlbumName('Self Education')} playSong={this.playSong} />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <h3>9. Immortal Technique and Friends - The CIA Hits</h3>
                <Album data={this.filterByAlbumName('The CIA Hits')} playSong={this.playSong} />
              </div>
              <div className="col-sm-6">
              <h3>10. Immortal Technique - The 3rd World</h3>
                <Album data={this.filterByAlbumName('The 3rd World')} playSong={this.playSong} />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <h3>11. Immortal Technique - The Martyr</h3>
                <Album data={this.filterByAlbumName('The Martyr')} playSong={this.playSong} />
              </div>
            </div>


        </div>



      </React.Fragment>
    );
  }
}


export default App

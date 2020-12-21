const Album = (props) => {
  return (
    <div className="album">
      <ol>
     {
      props.data.map((song) =>
       {
        return (
          <a onClick={() => props.playSong(song.id)}>
            <li key={song.id}>
            {song.name}<br/>
            </li>
        </a>
      )

      })
     }
     </ol>
    </div>

  );
}

export default Album;

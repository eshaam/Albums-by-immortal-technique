const Album = (props) => {
  return (
    <div>
      <ul>
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
     </ul>
    </div>

  );
}

export default Album;

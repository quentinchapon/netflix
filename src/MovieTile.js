const MovieTile = (props) => {
  return (
    <div className="movieTile">
      {}
      <img src={props.imgPath} alt={props.imgAlt}></img>
    </div>
  );
};

export default MovieTile;

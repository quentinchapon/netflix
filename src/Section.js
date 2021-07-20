// import MovieTile from "./MovieTile";
import SectionTitle from "./SectionTitle";
import listOfMovies from "./netflix.json";
import MovieTile from "./MovieTile";

const Section = (props) => {
  return (
    <div>
      {listOfMovies.map((section, index) => {
        return (
          <div className="sectionContent">
            <SectionTitle
              sectionTitle={listOfMovies[index].category}
            ></SectionTitle>
            <div className="moviesList">
              {section.images.map((movies, index) => {
                return <MovieTile imgPath={movies}></MovieTile>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section;

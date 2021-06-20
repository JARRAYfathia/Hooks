import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
	return (
    <div className="MovieCard">
		<Card style={{ width: '18rem'}}>
			<Card.Img variant="top" src={props.movie.Poster} className="poster" alt='movie' style={{width:'250px', height:'250px'}}/>
			<Card.Body>
			<Link to={`/Description/${props.movie.imdbID}`}>{props.movie.Title}</Link>
				<Card.Text> {props.movie.Year}</Card.Text>
				<Card.Text> {props.movie.rating}</Card.Text>
				
				
				</Card.Body>
	 	</Card>
    </div>
  );
};
export default MovieCard 
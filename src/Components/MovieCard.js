import { Card } from "react-bootstrap";

const MovieCard = (props) => {
	return (
    <div className="MovieCard">
		<Card style={{ width: '18rem'}}>
			<Card.Img variant="top" src={props.movie.Poster} className="poster" alt='movie' style={{width:'250px', height:'250px'}}/>
			<Card.Body>
				<Card.Title>{props.movie.Title}</Card.Title>
				<Card.Text> {props.movie.Year}</Card.Text>
				</Card.Body>
	 	</Card>
    </div>
  );
};
export default MovieCard 
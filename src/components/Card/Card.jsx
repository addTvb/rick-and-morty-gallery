import './Card.css';

export const Card = (props) => {
	const { id, name, gender, image } = props;
	
	return (
		<div className='character-card'>
			<img src={image} alt='' className='character-card__image' />
			<div className='character-card__info'>
				<span className='character-card__row'>
					<span>id: </span>
					<span className='bold'>{id}</span>
				</span>

				<span className='character-card__row'>
					<span>Name: </span>
					<span className='bold'>{name}</span>
				</span>

				<span className='character-card__row'>
					<span>Gender: </span>
					<span className='bold'>{gender}</span>
				</span>
			</div>
		</div>
	);
};

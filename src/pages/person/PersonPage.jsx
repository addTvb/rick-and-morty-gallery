import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import moment from  'moment'

import './PersonPage.css'

export const PersonPage = () => {
	const [searchParams] = useSearchParams();

	const [character, setCharacter] = useState(null);

	useEffect(() => {
		const jsonCharacter = searchParams.get('character');

		setCharacter(JSON.parse(jsonCharacter));
	}, []);

	return (
		<div className='person-wrapper'>
			<div className='person-card'>
				<img src={character?.image} alt='Character image' />
				<div className='person-data'>
					<Row title='id' value={character?.id} />
					<Row title='Name' value={character?.name} />
					<Row title='Gender' value={character?.gender} />
					<Row title='Status' value={character?.status} />
					<Row title='Species' value={character?.species} />
					<Row title='Created' value={moment(character?.created).format('DD-MM-YYYY | hh:mm')} />
					<Row title='Origin' value={character?.location.name} />
				</div>
			</div>
				<Link to='/characters' className='back-link'>All characters</Link>
		</div>
	);
};

const Row = ({ title, value }) => {
	return (
		<span className='row-wrapper'>
			<span>{title}: </span>
			<span className='bold'>{value}</span>
		</span>
	);
};

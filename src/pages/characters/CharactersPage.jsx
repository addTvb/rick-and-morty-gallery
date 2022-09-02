import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

import { Card } from '../../components/Card/Card';

import './CharactersPage.css';
import { Spinner } from '../../components/Spinner/Spinner';

const getCharacterLink = (character) => {
	return `/characters:${character.id}?character=${JSON.stringify(character)}`;
};

export const CharactersPage = () => {
	const [characters, setCharacters] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);

		axios({
			method: 'GET',
			url: `https://rickandmortyapi.com/api/character?page=${currentPage}`,
		}).then((res) => {
			setCharacters(res.data);
			setIsLoading(false);
		});
	}, [currentPage]);

	const getFirstPage = () => setCurrentPage(1);
	const getLastPage = () => setCurrentPage(characters.info.pages);

	const getNextPage = () => setCurrentPage(currentPage + 1);
	const getPrevPage = () => setCurrentPage(currentPage - 1);
	return (
		<div>
			<div>
				<span>Characters count: </span>
				<span>{characters?.info?.count}</span>
			</div>
			<div className='characters-wrapper'>
				{isLoading ? (
					<Spinner />
				) : (
					characters.results.map((character, index) => (
						<Link to={getCharacterLink(character)}>
							<Card
								key={index}
								id={character.id}
								name={character.name}
								gender={character.gender}
								image={character.image}
							/>
						</Link>
					))
				)}
			</div>
			<div className='pagination'>
				<div className='pagination__buttons'>
					<button onClick={getFirstPage} disabled={characters ? false : true}>
						First page
					</button>
					<button
						onClick={getPrevPage}
						disabled={currentPage === 1 ? true : false}
					>
						{'<'}
					</button>
					<button
						onClick={getNextPage}
						disabled={currentPage === characters?.info?.pages ? true : false}
					>
						{'>'}
					</button>
					<button onClick={getLastPage} disabled={characters ? false : true}>
						Last page
					</button>
				</div>
				<span>
					<span>Current page: </span>
					<span className='bold'>{currentPage}</span>
				</span>
			</div>
		</div>
	);
};

import React from 'react';
import Card from './Card'; //has robots

const CardList = ({robots}) => {

	return (
	  	<div>
		    {
				robots.map((user,i) => { //mapping each array item from robots 
					return (
						<Card 
							key={robots[i].id} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
				})
		    }
		</div>
	);
}

export default CardList;
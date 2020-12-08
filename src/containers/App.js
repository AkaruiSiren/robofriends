import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import { robots } from './robots';
import './app.css';

class App extends Component {

	constructor() { //prebuild constructor method
		super();
		this.state = { //state is something that can chnage
			robots: [],
			searchfield: ''		
		}
	}

	componentDidMount() { //prebuild componentDidMount method
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
		//this.setState({robots: robots})
	}

	onSearchChange = (event) => { //creating own function		
		this.setState({ searchfield: event.target.value }) //prebuild setState		
	}

	render(){ //prebuild render method

		const {robots, searchfield} = this.state;

		const filteredRobots = robots.filter( robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		//if(!robots.length) { //if !(robots === 0)
		//	return <h1>Loading...</h1>
		//}else{
		//	return (
		//		<div className='tc'>
		//			<h1 className='f1'>RoboFriends</h1>
		//			<SearchBox searchChange={this.onSearchChange} />
		//			<Scroll>
		//				<CardList robots={filteredRobots} />
		//			</Scroll>
		//		</div>
		//	);
		//}

		return !robots.length 
		?	<h1>Loading...</h1>
		:	<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>		
	}
}

export default App;
import React from 'react';
import ReactDom from 'react';
import './Site.css';
import 'tachyons'; /*bootstrap alternative*/
import Avatarlist from './Avatarlist';

const Site = (props) =>{

/*instead of using long process we are using array object*/
	const avatarlistarray = [
		{
			id:1,
			name:"Ravi Rajput",
			work:"Back End Developer"
		},
		{
			id:2,
			name:"Su chan",
			work:"Front End Developer"
		},
		{
			id:3,
			name:"Mark",
			work:"UI/UX Developer"
		},
		{
			id:4,
			name:"Jack",
			work:"Business Relation"
		}
	]
/*Now we are using array map function*/
	const arrayavatarcard = avatarlistarray.map((avatarcard,i) => {
		return <Avatarlist id={avatarlistarray[i].id} 
							name={avatarlistarray[i].name}
							work={avatarlistarray[i].work}/>
	})
	return( 
		<div className="mainpage">
		<h1>Meet the Team</h1>
			{arrayavatarcard}
			<button> Click Me </button>
		</div>
		)
} 

export default Site;
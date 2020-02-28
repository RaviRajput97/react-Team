import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './tmo.css';

/*Below is function architecture using es6 style*/
const Tmo = (props) => {
return <div className="maindiv_style">
	<h1>Hello {props.name}</h1>
	<p>This is my website to learn</p>
</div>
}
export default Tmo;

/*---------------------------------------------------------------------------*/

/*Below is Component architecture*/
/*class Tmo extends Component{
render(){ /*when ever a cimponent is created it will return something*/
/*return <div className="maindiv_style">
	<h1>Hello {this.props.name}</h1>
	<p>This is my website to learn</p>
</div>*/ /*we need to use a single div or section to return some jsx*/
/*}
}*/

import axios from 'axios';
import { Request_FULFILLED, Request_REJECTED} from '../constants/action-types';

export default function fetchData(){
		//AJAX call to fetch project list data
	return function(dispatch){
		axios.get('https://api.myjson.com/bins/coymt')
		.then(function (response) {	
		    // Dispatch the success action with the payload
    		dispatch({
		        type: Request_FULFILLED,
		        payload: response.data.pacakges,
        	});
    	}.bind(this))
	  	.catch(function (error) {
	    // Dispatch the error action with error information
		    dispatch({
		        type: Request_REJECTED,
		        error: error
		    });
    	});
	};


}

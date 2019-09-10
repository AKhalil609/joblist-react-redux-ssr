import {FETCH_JOBS, CHANGE_PAGE} from "./types";
import data from "../data/jobList.json";


/**
 * After importing the data from a local .json file
 * dispatches the data as a 'FETCH_JOBS' action
 * @method fetchJobs
 */

export const fetchJobs = () =>  dispatch =>{
     dispatch({
        type: FETCH_JOBS,
        payload: data,
        viewed: data.slice(0,5), // selectes the first 5 elements of the array to be viewed
        loading:false
      });  
}

/**
 * Used to increment or decrement the page number to show the different jobs
 * @method changePage
 * @param {number} operation - (-1,1) to see if the page is going to be incremented or decremented
 * @param {number} pageNumber - The number of current page.
 * @param {array} data - The full data that is reviced from the state.
 * 
 */


export const changePage = (operation,pageNumber,data) => async dispatch =>{

    let newPageNumber = pageNumber + operation
    let startElement = 5*(0+newPageNumber)
    let endElement = 5*(1+newPageNumber)

    let viewed = data.slice(startElement,endElement)

    await dispatch({
      type: CHANGE_PAGE,
      payload: viewed,
      pageNumber: newPageNumber,
      loading:false
    });

}
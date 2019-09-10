import {FETCH_JOBS, CHANGE_PAGE} from "../actions/types";

// init state
const initialState = {loading:true, jobCount:0, totalPages:0, data:[], viewed:[], currentPage: 0};

 /**
 * JobsReducer
 * @param {object} state - The initialState.
 * @param {object} action - the action that is included in the dispatch method.
 * @returns {object} newstate - returns an object of grouped arrays
 */

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_JOBS:
            return {
                ...state,
                data: action.payload,
                jobCount: action.payload.length,
                totalPages: Math.ceil(action.payload.length/5), // Cal the total number of pages
                viewed: action.viewed,
                loading: action.loading
              };

        case CHANGE_PAGE:{
            return {
                ...state,
                viewed: action.payload,
                currentPage: action.pageNumber
            }
        }
    
        default:
            return state;
    }
}
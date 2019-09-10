import {FETCH_JOBS} from '../actions/types';
import jobsReducer from './jobsReducer'

describe('Jobs Reducer', () => {
    it('Should return default state', ()=>{
        const newState = jobsReducer(undefined, {});

        expect(newState.data).toEqual([])
    });

    it('Should return new state if receiving type', ()=>{
        const jobs = [{title:'Job1'},{title:'Job2'},{title:'Job3'},{title:'Job4'},]
        const newState = jobsReducer(undefined, {
            type: FETCH_JOBS,
            payload: jobs
        });

        expect(newState.data).toEqual(jobs)
    })
})

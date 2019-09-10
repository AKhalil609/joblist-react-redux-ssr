import data from '../data/jobList.json';
import {testStore} from '../../Utils';
import {fetchJobs} from './jobActions';

let jobs;
describe('fetchJobs action', () => {
    beforeEach(()=>{
        jobs = data;
    })

    it('Should update the Store wihout errors',  ()=>{
        const expectedStateData = jobs;
        const store =testStore();

        store.dispatch(fetchJobs())
        
        const newState = store.getState();
        expect(newState.jobs.data).toBe(expectedStateData);
        expect(newState.jobs.loading).toBe(false);
    })

})

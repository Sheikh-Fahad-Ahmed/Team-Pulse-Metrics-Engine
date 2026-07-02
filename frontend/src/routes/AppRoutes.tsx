import {Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Metrics from '../pages/metrics';
import Activity from '../pages/activity';

function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/metrics' element={<Metrics/>} />
            <Route path='/activity' element={<Activity/>} />
        </Routes>
    )
}

export default AppRoutes;
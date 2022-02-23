import React from 'react'
import HomeChart from '../components/homeCom/HomeChart'
import TopBoxs from '../components/homeCom/TopBoxs'
import WidgetLg from '../components/homeCom/WidgetLg';
import WidgetSm from '../components/homeCom/WidgetSm';
import {userData} from "../domyData";
function HomePage() {
    return (
        <div className='z-0 pt-10'>
            <TopBoxs/>
            <HomeChart data={userData} grid title="User Analytcis" dataKey="active users"/>
            <div className='grid md:grid-cols-3'>
                <div className=''> 
                    <WidgetSm/>
                </div>
                <div className='col-span-2'>
                    <WidgetLg/>
                </div>
            </div>
        </div>
    )
}

export default HomePage

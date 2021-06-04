import React, {useReducer} from 'react';
import ReactEcharts from 'echarts-for-react';
import initialDashboardState from '../initialDashboardState';
import dashboardReducer from '../../../reducers/dashboardReducer';




const EnrolmentCentre = () => {
    const [dashboardState, dashboardStateDispatch] = useReducer(dashboardReducer, initialDashboardState);

    const data = {
    data: {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: 'Enrolment',
                type: 'pie',
                radius: '60%',
                center: ['50%', '50%'],
                data:[
                    {
                        value: 28, //basicLivelihoodName
                        name:'Basic Livelyhood'
                    },
                    {value: 77, name:'Joint Skill Groups'},
                    {value:4, name:'Youth Challenge Support'},
                    {value:23, name:'Cooperative Development'},
                    {value:32, name:'VC Production'},
                    {value:33, name:'VC Lesp'},
                    {value:22, name:'Graduation'},
                    
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
};
    return (
            <div className="card mb-4 overflow-hidden">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Central Region Enrolment</h5>
                    </div>

                    <ReactEcharts 
                        option={data.data} 
                        style={{height: '350px'}} 
                        notMerge={true} 
                        lazyUpdate={true} 
                        opts={{renderer: 'svg'}}
                    />
                </div>
            </div>
        );
}

export default EnrolmentCentre




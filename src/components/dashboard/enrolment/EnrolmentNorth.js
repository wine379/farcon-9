import React from 'react';
import ReactEcharts from 'echarts-for-react';

class NorthernRegionEnrolment extends React.Component {
    render() {
        return (
            <div className="card mb-4 overflow-hidden">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Northern Region Enrolment</h5>
                    </div>

                    <ReactEcharts 
                        option={this.props.data} 
                        style={{height: '350px'}} 
                        notMerge={true} 
                        lazyUpdate={true} 
                        opts={{renderer: 'svg'}}
                    />
                </div>
            </div>
        );
    }
}

NorthernRegionEnrolment.defaultProps = {
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
                    {value:23, name:'Basic Livelyhood'},
                    {value:32, name:'Joint Skill Groups'},
                    {value:33, name:'Youth Challenge Support'},
                    {value:46, name:'Cooperative Development'},
                    {value:35, name:'VC Production'},
                    {value:44, name:'VC Lesp'},
                    {value:34, name:'Graduation'},
                    
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

export default NorthernRegionEnrolment;
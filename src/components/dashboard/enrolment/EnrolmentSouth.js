import React from 'react';
import ReactEcharts from 'echarts-for-react';

class SouthernRegionEnrolment extends React.Component {
    render() {
        return (
            <div className="card mb-4 overflow-hidden">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Southern Region Enrolment</h5>
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

SouthernRegionEnrolment.defaultProps = {
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
                    {value:34, name:'Basic Livelyhood'},
                    {value:22, name:'Joint Skill Groups'},
                    {value:33, name:'Youth Challenge Support'},
                    {value:22, name:'Cooperative Development'},
                    {value:22, name:'VC Production'},
                    {value:32, name:'VC Lesp'},
                    {value:21, name:'Graduation'},
                    
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

export default SouthernRegionEnrolment;
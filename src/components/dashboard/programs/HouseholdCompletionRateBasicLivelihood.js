import React from 'react';
import ReactEcharts from 'echarts-for-react';

class householdCompletionRate extends React.Component {
    render() {
        return (
            <div className="card mb-4 overflow-hidden">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Household Completion Rate </h5>
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

householdCompletionRate.defaultProps = {
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
                    {value:householdCompletionRateBasicLivelihood, name:'Basic Livelyhood'},
                    {value:householdCompletionRateEnhancedLivelihoodProductionValueChain, name:'Production Value Chain'},
                    {value:householdCompletionRateEnhancedLivelihoodYouthChallengeSupport, name:'Youth Challenge Support'},
                    {value:householdCompletionRateEnhancedLivelihoodCorporativeDevelopment, name:'Cooperative Development'},
                    {value:householdCompletionRateEnhancedLivelihoodLesp, name:'VC Lesp'},
                    {value:householdCompletionRateGraduation, name:'Graduation'},
                    
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

export default householdCompletionRate;
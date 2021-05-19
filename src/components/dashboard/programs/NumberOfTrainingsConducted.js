import React from 'react';
import ReactEcharts from 'echarts-for-react';

class numberOfTrainingsConducted extends React.Component {
    render() {
        return (
            <div className="card mb-4 overflow-hidden">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Number Of Trainings Conducted </h5>
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

numberOfTrainingsConducted.defaultProps = {
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
                    {value:numberOfTrainingsConductedBasicLivelihood, name:'Basic Livelyhood'},
                    {value:numberOfTrainingsConductedEnhancedLivelihoodProductionValueChain, name:'Production Value Chain'},
                    {value:numberOfTrainingsConductedEnhancedLivelihoodYouthChallengeSupport, name:'Youth Challenge Support'},
                    {value:numberOfTrainingsConductedEnhancedLivelihoodCorporativeDevelopment, name:'Cooperative Development'},
                    {value:numberOfTrainingsConductedEnhancedLivelihoodLesp, name:'VC Lesp'},
                    {value:numberOfTrainingsConductedGraduation, name:'Graduation'},
                    
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

export default numberOfTrainingsConducted;
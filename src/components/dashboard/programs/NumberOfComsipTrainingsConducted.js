
import React from 'react';
import ReactEcharts from 'echarts-for-react';

class numberofComsipTrainingsConducted extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Types Of Trainings Conducted</h5>
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

numberofComsipTrainingsConducted.defaultProps = {
    data: {
        color: ['#2962ff'],
        tooltip: {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'       
            }
        },
        grid: {
            top: '5%',
            left: '5',
            right: '0',
            bottom: '1',
            containLabel: true
        },
        xAxis: [
            {
                type : 'category',
                data : ['Training of Trainers', 'Orientations', 'Sensitization Meetiongs'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#797979',
                        type: 'solid',
                        width: '1',
                        shadowColor: 'rgba(0,0,0,0)',
                        shadowBlur: 5,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3,
                    }
                }
            }
        ],
        yAxis: [
            {
                type : 'value',
                axisLabel: {
                    formatter: '$ {value}'
                },
                axisLine: {
                    show: true,
                    onZero: false,
                    lineStyle: {
                        color: '#797979',
                        type: 'solid',
                    }
                }
            }
        ],
        series: [
            {
                name:'Total Trainings Conducted',
                type:'bar',
                barWidth: '50%',
                data:[10000, 5000, 7000],
                itemStyle: {
                    normal: {
                        color: '#2962ff',
                        lineStyle: {
                            color: '#2962ff',
                            type: 'solid',
                            shadowColor: 'rgba(0,0,0,0)',
                            shadowBlur: 5,
                            shadowOffsetX: 3,
                            shadowOffsetY: 3,
                        },
                        areaStyle: {
                            color: '#2962ff',
                            type: 'default',
                        }
                    },
                },
            }
        ]
    }
};

export default numberofComsipTrainingsConducted;
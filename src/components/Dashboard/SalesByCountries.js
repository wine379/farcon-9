import React from 'react';
import ReactEcharts from 'echarts-for-react';

class SalesByCountries extends React.Component {
    render() {
        return (
            <div className="card mb-4 overflow-hidden">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Enrolment By Region</h5>
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

SalesByCountries.defaultProps = {
    data: {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: 'Region',
                type: 'pie',
                radius: '60%',
                center: ['50%', '50%'],
                data:[
                    {value:635, name:'Southern Region'},
                    {value:800, name:'Central Region'},
                    {value:534, name:'Northen Region'},
                    {value:135, name:'Easten Region'},
                    {value:148, name:'Western Region'}
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

export default SalesByCountries;
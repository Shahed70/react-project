import React, { Component } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis ,Tooltip} from 'recharts'

 class Chart extends Component {
            constructor(){
                super()
                this.state = {
                    data:[
                        {Technology:"Php", projects:100 },
                        {Technology:"javacript", projects:80},
                        {Technology:"jquery", projects:25},
                        { Technology:"Python", projects:50},
                        { Technology:"Bootstarp", projects:70},
                        { Technology:"React", projects:100},
                        { Technology:"Larave", projects:50},
                        { Technology:"SQL", projects:100}
                        
                    ]
                }
            }
   
    render() {
        const color = 'blue';
        return (
            <>
                <ResponsiveContainer className="py-5">
                <BarChart width={100} height={300} data={this.state.data}>
                    <XAxis dataKey="Technology"/>
                    <Tooltip />
                    <Bar dataKey="projects" fill={color}>
                    </Bar>
                </BarChart>
                </ResponsiveContainer>
            </>
        )
    }
}

export default Chart

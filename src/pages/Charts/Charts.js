import React from 'react'
import Chart from '../../components/Chart/Chart'
const Charts = ({rooms}) => {
    return (
        <>
        <h3>Chart</h3>
        <Chart rooms={rooms} />
        </>
    )
}

export default Charts

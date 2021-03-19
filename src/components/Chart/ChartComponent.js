import React,{useEffect, useRef} from 'react'
import Chart from 'chart.js';

const ChartComponent = ({options, legend, type, plugins, data}) => {


      const height = 200
      const width=200
      const id ="canvaID";
      const node = useRef()
    
      const renderChart = (node)=> {
          console.log(data);
          console.log("Entro");
            const chartInstance =  new Chart(node, {
            type,
            data,
            options
          })
        
      }

      useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        console.log(node.current);
        renderChart(node.current);
      },[node]);

   

    return (
        <canvas
            ref={node}
            height={height}
            width={width}
            id={id}
      />
    )
}

export default ChartComponent

import React, {useState} from 'react'
import Room from '../../components/Room/Room'
import { Doughnut } from 'react-chartjs-2'



const Chart = ({rooms}) => {

    const countLimpias = rooms.filter((r)=>(r.estado_id===1)).length;
    const countOcupadas = rooms.filter((r)=>(r.estado_id===2)).length;
    const countSucias = rooms.filter((r)=>(r.estado_id===3)).length;
    const countNoDisponible = rooms.filter((r)=>(r.estado_id===4)).length;

    const data = {
        labels: ['Limpias', 'Ocupadas', 'Sucias', 'No Disponible'],
        ids: [1,2, 3,4],
        datasets: [
          {
            data: [countLimpias, countOcupadas,countSucias, countNoDisponible],
            backgroundColor: [
              'seagreen',
              'tomato',
              'steelblue',
              '#999'
            ],
           
            borderWidth: 1,
          },
        ],
      }
    
    const  options =  {
        legend: {
            display: true,
            position:'left',
            labels:{
                fontColor:"#333"
            }
        }
    }

    const [clickedId, setClickedId] = useState('')

    const getElementAtEvent = element => {
      if (!element.length) return
  
      const { _datasetIndex: datasetIndex, _index: index } = element[0]
      setClickedId(data.ids[index])
    }

    return (
      <>
        <Doughnut data={data} options={options}  getElementAtEvent={getElementAtEvent} />
        {
          rooms.filter((r)=>(r.estado_id===clickedId)).map((x)=>(
            <Room room={x}/>
          ))
        }
      </>
    )
}

export default Chart

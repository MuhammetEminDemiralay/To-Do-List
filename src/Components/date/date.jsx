import { useEffect, useState } from 'react'
import './date.css'

function DateTime(){

    
    const [date, setDate] = useState(null);
    const [instantTime, setİnstantTime] = useState(new Date())
    const [formatDate, setFormatDate] = useState()

    useEffect(() => {
        const setInteval = setInterval(() => {
            setİnstantTime(new Date())
        }, 1000) 
        
    }, [instantTime])


    function handleChangeDate(e){
        const selectTime = e.target.value
        setDate(e.target.value)
    }

    return (
        <div className='container-date'>

            <div className='instant-time'>
                <div className='date'>
                     {instantTime.toDateString('default', {dateStyle : 'long'})}
                </div>
                <div className='clock'>
                    <div className='time-box'>
                        <div className="overlay">
                            {instantTime.getHours()}
                        </div>
                    </div>
                    <div className='time-box'>
                        <div className="overlay">
                            
                        </div>
                    </div>
                    <div className='time-box'>
                        <div className="overlay">

                        </div>
                    </div>
                </div>
            </div>

            <input type="datetime-local" onChange={handleChangeDate} />
           
        </div>
    )
}

export default DateTime
import { useEffect, useState } from 'react'
import './date.css'

function DateTime({handleChange}){

    const [date, setDate] = useState(null);
    const [instantTime, setİnstantTime] = useState(new Date())
    const [formatDate, setFormatDate] = useState()
    const [second, setSecond] = useState();
    const [minute, setMinute] = useState();
    const [hour, setHour] = useState();

    useEffect(() => {
        const setInteval = setInterval(() => {
            setİnstantTime(new Date())
        }, 1000) 
        
    }, [instantTime])

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setSecond((date.getSeconds() / 60) * 360);
            setMinute((date.getMinutes() / 60) * 360);
            setHour((date.getHours() / 12) * 360);
        }, 1000)
    }, [])



    return (
        <div className='container-date'>

            <div className='instant-time'>
                <div className='date'>
                     {instantTime.toDateString('default', {dateStyle : 'long'})}
                </div>
                <div className='clock'>
                    <div className='time-box'>
                        <div className="box" style={{transform:`rotate(${hour}deg)`}}>
                            <div className="overlay" style={{transform:`rotate(${-hour}deg)`}}>
                                {instantTime.getHours()}
                            </div>
                        </div>
                    </div>
                    <div className='time-box'>
                        <div className="box" style={{transform:`rotate(${minute}deg)`}}>
                            <div className="overlay" style={{transform:`rotate(${-minute}deg)`}}>
                                {instantTime.getMinutes()}
                            </div>
                        </div>
                    </div>
                    <div className='time-box'>
                        <div className="box" style={{transform:`rotate(${second}deg)`}}>
                            <div className="overlay"  style={{transform:`rotate(${-second}deg)`}}>
                                {instantTime.getSeconds()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <input type="datetime-local" onChange={handleChange} name='date'/>
        </div>
    )
}

export default DateTime
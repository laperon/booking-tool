import React, { useState, useContext, useEffect } from "react";
import styles from '../assets/style.css'

function BookingForm({ checkStatus }) {

    const classes = [];

    const [inputClass , setInputClass] = useState('');
    const [flag, setFlag] = useState();

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [purpose, setPurpose] = useState('');
    const [days, setDays] = useState('');
    const [first_day, setFirstDays] = useState('');
    const [room, setRoom] = useState('');
    const [vaccinated, setVaccinated] = useState('');
    const [wishes, setWishes] = useState('');

    useEffect(function () {
        // console.log('Booking', status);
    })

    function sendDataToDatabase() {
        fetch('http://localhost:3005/booking', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name_surname: name,
                location: location,
                purpose: purpose,
                days: days,
                first_day: first_day,
                room: room,
                vaccinated: vaccinated,
                wishes: wishes,
            })
        })
    }


    function handleSubmit(event) {
        event.preventDefault();
        sendDataToDatabase();
        checkStatus(true)
    }

    return(
        <form onSubmit={handleSubmit} className="booking-form">
            <div>
                <label htmlFor="name">Name and Surname<span className="red">*</span></label>
                <div>
                    <input required id="name" type="text" onChange={(event) => setName(event.target.value)} placeholder="Name and Surname" />
                </div>
            </div>
            <div>
                <label htmlFor="location">Location<span className="red">*</span></label>
                <div>
                    <select required onChange={(event) => setLocation(event.target.value)} placeholderid="location">
                        <option value="kh-monte-plaza">KH Monte Plaza</option>
                        <option value="kh-summer-co-zone">KH Summer Co-Zone</option>
                        <option value="kyiv">Kyiv</option>
                        <option value="dnipro">Dnipro</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="purpose">Purpose of WFO<span className="red">*</span></label>
                <div>
                    <select onChange={(event)=>setPurpose(event.target.value)} name="purpose" id="purpose">
                        <option value="0" disabled>Choose</option>
                        <option value="business">Business reasons</option>
                        <option value="personal">Personal reasons</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="days">How many days do you want to WFO<span className="red">*</span></label>
                <div>
                    <select onChange={(event) => setDays(event.target.value)} name="days">
                        <option value="0" disabled>Choose</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="first-day">
                    First day of WFO<span className="red">*</span>
                </label>
                <div>
                    <input onChange={(event) => setFirstDays(event.target.value)} name="first-day" type="date" placeholder="dd.mm.yy" />
                </div>
            </div>
            <div>
                <label htmlFor="room">
                    Preferable Room / Zone
                </label>
                <div>
                    <input onChange={(event) => setRoom(event.target.value)} name="room" type="text" placeholder="Your answer" />
                </div>
            </div>
            <div>
                <label htmlFor="vaccinated">I am fully vaccinated<span className="red">*</span></label>
                <div>
                    <div><input onChange={(event) => setVaccinated(event.target.value)} name="vaccinated" id="vaccinated" type="radio" value="Yes" /> Yes</div>
                    <div><input onChange={(event) => setVaccinated(event.target.value)} name="vaccinated" id="vaccinated" type="radio" value="No" /> No</div>
                </div>
            </div>
            <div>
                <label htmlFor="wishes">
                    Additional wishes (specific equipment, room for 1 person etc.)
                </label>
                <div>
                    <input type="text" onChange={(event) => setWishes(event.target.value)} name="wishes" placeholder="Your answer" />
                </div>
            </div>
            <input type="submit" value="Send request"/>
        </form>
    )
}

export default BookingForm
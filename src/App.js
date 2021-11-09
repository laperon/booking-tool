import * as React from 'react';
import BookingForm from './forms/BookingForm';
import Spreeadsheet from './lib/Spreeadsheet';


export default function App() {

  // useEffect(() => {
  //   fetch("http://localhost:3000/list")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         // setIsLoaded(true);
  //         // setItems(result.items);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       // (error) => {
  //       //   setIsLoaded(true);
  //       //   setError(error);
  //       // }
  //     )
  // }, [])

  // useEffect(() => {
  //   fetch("http://127.0.0.1:3000/list")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         console.log(result)
  //         // setIsLoaded(true);
  //         // setItems(result.items);
  //       }
  //     ),
  // }, []);

  // const sendRequest = (event) => {
  //   console.log(location);
  //   console.log(name);
  // };

  /**
  Name and Surname * (text)
  Location * (select)
  Purpose of WFO * (business, personal)
  How many days do you want to WFO * (1-5) 
  First day of WFO *(date)
  Preferable Room / Zone (text)
  I am fully vaccinated * (yes , no)
  Additional wishes (specific equipment, room for 1 person etc.) ) (text)
   */

  return (
    <div>
      <Spreeadsheet />
      <BookingForm />
    </div>
  );
}


import React from 'react';
import Event from './Event';
const Calendar = () => {
    
   return (
    <table>
    <thead>
         <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
        </tr>         
    </thead>
    <tbody>
    <tr>
          <td className="time">8am</td>
          <Event event = "Fancy Dinner🎩" color="green" location="Maple & Ash"/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Yolk 🍳' color ='green' location="Home"/>
          <td></td>
      </tr> 
      <tr>
          <td className="time">9am</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Starbucks ☕️' color ='green' location="Mall"/>
          <td></td>
          <td></td>
          <td></td>
      </tr> 
      <tr>
          <td className="time">10am</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event = "Art Institute🖼" color="blue" location='Broadway'/>
          <Event event='Subway 🚊' color ='pink' location="Bryant Park"/>
          <td></td>
      </tr> 
      <tr>
          <td className="time">11am</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr> 
      <tr>
          <td className="time">12pm</td>
          <td></td>
          <td></td>
          <Event event='The Musical 🧑‍🎤' color ='blue'location= "Broadway"/>
          <td></td>
          <td></td>
          <td></td>
          <Event event='The Bean 🫘' color ='blue'location= "Broadway"/>
      </tr> 
      <tr>
          <td className="time">1pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr> 
      <tr>
          <td className="time">2pm</td>
          <Event event='Subway 🚊' color ='pink' location ="The heights"/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr> 
      <tr>
          <td className="time">3pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr> 
      <tr>
          <td className="time">4pm</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Swimming 🚊' color ='blue' location ="Corona Pool"/>
          <td></td>
          <td></td>
          <td></td>
      </tr> 
      <tr>
          <td className="time">5pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr> 
  </tbody>
  </table>
   )
}
 
export default Calendar

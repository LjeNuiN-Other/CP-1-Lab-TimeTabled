import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">

      <h1>Itinerary for 7 Days in New York</h1>
      <h2>Welcome to NYC, Luis! Check out this calneder to get to know the city and see all the sights during your stay</h2>
      <Calendar/>
    </div>
  )
}

export default App
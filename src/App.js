import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card
 from './Card';
function App() {
  const [city, setCity]= useState('');
  const [apiRes, setApiRes] = useState({});
  const [isSearchOn, setIsSearchOn]= useState(false)


  const handleApiCall = async () => {
    try {
      setIsSearchOn(true)
      const fetchApi = await fetch(`https://api.weatherapi.com/v1/current.json?key=1f88b5cbff0d471981382302240701&q=${city}&aqi=no`);
  
      if (!fetchApi.ok) {
        alert('Failed to fetch weather data');
        setIsSearchOn(false)
      }
      const res = await fetchApi.json();
      setApiRes(res);
      console.log(res)
    } catch (error) {
      setIsSearchOn(false)
      alert('Failed to fetch weather data')
    }
  };
  

  const handleChange=(event)=>{
    setCity(event.target.value)
  }


  return (
    <div className="App weather-cards">
      <div style={{padding:'50px 0px'}}>
        <input type='text' value={city} placeholder='Enter City Name' onChange={handleChange} style={{border:'none', width:'200px', height:'30px'}}/>
        <button type='button' onClick={handleApiCall} style={{height:'30px', backgroundColor:'green', color:'white', border:'none'}}>Search</button>
      </div>
      {apiRes && apiRes.current ? (
        <div style={{ width: '100%', display: 'flex', justifyContent:'space-evenly', alignContent:'space-evenly' }}>
          <Card title={'Temperature'} value={apiRes.current.temp_c}/>
          <Card title={'Humidity'} value={apiRes.current.humidity}/>
          <Card title={'Condition'} value={apiRes.current.condition.text}/>
          <Card title={'Wind Speed'} value={`${apiRes.current.wind_kph} Kph`}/>
        </div>
      ) : (
        isSearchOn ?(<div style={{ width: '100%', textAlign:'center'}}>
        <p>Loading data...</p>
      </div>):''        
      )}
    </div>
  );
  
  
}

export default App;

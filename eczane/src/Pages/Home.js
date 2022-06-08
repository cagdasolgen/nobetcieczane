import React, { useState} from "react";
import Data from "../components/Data";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

let flag = true;
const Home = () => {
  
  const [data,setData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [ilçe, setIlçe] = useState("Merkez");
  const selectedDay = Number(moment(date).format('DD'));
  
  
  const changeDate = (e) => {
    setDate(e);
  }
  
  const ilceChange = (e) => {
    setIlçe(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(Data);       
  };

  return (
    <div>     
      <form onSubmit={handleSubmit}>
        <h2 for="ilçe">Lütfen İlçe Seçiniz:</h2>
        <select
          id="ilçe"
          className="select mb-5"
          onChange={ilceChange}>
          <option value="Merkez">Merkez</option>
          <option value="Uzunköprü">Uzunköprü</option>
          <option value="Enez">Enez</option>
          <option value="Havsa">Havsa</option>
          <option value="İpsala">İpsala</option>
          <option value="Keşan">Keşan</option>
          <option value="Lalapaşa">Lalapaşa</option>
          <option value="Meriç">Meriç</option>
          <option value="Süloğlu">Süloğlu</option>
         </select>

        <div>
          <label>Lütfen Tarih Seçiniz: </label>
          <Calendar   
            value={date}
            onChange={changeDate} className="m-auto"/>
        <p> Current selected date is  <b>{moment(date).format('MMMM Do YYYY')}</b></p>
        <p>Selected day: {selectedDay}</p>
        </div>

        <button type="submit" class="btn btn-primary m-5">
          Nöbetçi Eczane Ara
        </button>
      </form>
      
      <div className="result">
        {  
          data.filter( (item) => item.ilçe === ilçe && selectedDay > 0 )
          .map((item, idx) => {
          if (item.ilçe === "Merkez" && idx === selectedDay ) {
            return (
            <div class="card m-5">
              <div class="card-header text-primary">{item.adı}</div>
              <div class="card-body">
                {" "}
                {item.adres},{item.ilçe}
              </div>
              <div class="card-footer">{item.telefon}</div>
            </div>
          );
          }
          else if(idx===1) {                        
            return (
              <div class="card m-5">
                <div class="card-header text-primary">{item.adı}</div>
                <div class="card-body">
                  {" "}
                  {item.adres},{item.ilçe}
                </div>
                <div class="card-footer">{item.telefon}</div>
              </div>
            );
            
          }
        })}
      </div>
    </div>
  );
};

export default Home;
import logo from './logo.svg';
import './App.css';
import  {useState} from "react"

function App() {
  const [weight, setWeight]=useState('')
  const [bottles, setBottles]=useState(1)
  const [time, setTime]=useState(1)
  const [gender, setGender]=useState('')
  const [answer, setAnswer]=useState('')

  //funktio laskee verenalkoholipitoisuuden
  function calculate(e){
    let litres=bottles*0.33
    let grams=litres *8 *4.5
    let burning = weight/10
    let gramsleft= grams-(burning*time)
    let result=''

    //Tarkistaa, että paino on syötetty
    if (weight===''){
      result="Enter your weight"
    }
    //Tarkistaa, että sukupuoli syötetty
    else if (gender===''){
      result='Select gender'
    }
    //Laskee tuloksen, kun kaikki arvot annettu ja jos tulos negatiivinen niin muuttaa sen nollaksi
    else{
      if (gender==="male"){
      let result1=gramsleft/(weight*0.7)
        if (result1<0){
          result=0
        }
        else{
          result=result1.toFixed(2)
        }
      }
      else{
        let result2=gramsleft/(weight*0.6)
        if (result2<0){
          result=0
        }
        else{
          result=result2.toFixed(2)
        }
      }
    }
    setAnswer(result)
  }


  return (
    <div>
      <h1>Calculating alcohol blood level</h1>
      <form>
        <div>
          <label className="form-label">Weight</label>
          <input type="number" className="form-control" value={weight} onChange={e =>setWeight(e.target.value)}></input>
        </div>
        <div>
          <label className="form-label">Bottles</label>
          <select className="form-select" name="bottles" value={bottles} onChange={e =>setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label className="form-label">Time</label>
          <select className="form-select" name="time" value={time} onChange={e =>setTime(e.target.value)}>
          <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label className="form-label">Gender</label>
          <label>Male</label>
          <input type="radio" name="gender" value="male" onChange={e =>setGender(e.target.value)}></input>
          <label>female</label>
          <input type="radio" name="gender" value="female" onChange={e =>setGender(e.target.value)}></input>
        </div>
        <div>
          <output>{answer}</output>
        </div>
        <button type="button" className="btn btn-primary" onClick={calculate}>Calculate</button>
      </form>
    </div>
  );
}

export default App;

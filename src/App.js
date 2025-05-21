import { AboutUs } from './AboutUs';
import { Member } from './Member';
import "./App.css";
// import "./Member.css";
function App() {
  const people=[
    {name:"Ravi",city:"Hyderabad"},
    {name:"Ramu",city:"Kkd"},
    {name:"Nani",city:"Ban"},
    {name:"Lakshmi",city:"kkd"},
    {name:"Devi",city:"chennai"},
    {name:"Syam",city:"Ban"},
    {name:"Ravi",city:"kkd"},
    {name:"Garal",city:"chennai"},
    {name:"Lakshmi",city:"kkd"},
    {name:"Devi",city:"chennai"},
    {name:"Syam",city:"Ban"},
    {name:"Ravi",city:"kkd"},
    {name:"Garal",city:"chennai"},
    {name:"Ravi",city:"Hyderabad"},
    {name:"Ramu",city:"Kkd"},
    {name:"Nani",city:"Ban"},
    {name:"Lakshmi",city:"kkd"},
  ];
  return (
    <div>
      <AboutUs/>
      <div className="members-container">
        {people.map(function(member){
         return  <Member name ={member.name} city={member.city}/>
        })}
       {/* <Member name ="Ravi" city="Hyderabad"/>
        <Member name="Syam" city="mumbai"/> */}
        </div>
        
    </div>
  );
}

export default App;

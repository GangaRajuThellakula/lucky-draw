import React from "react";
import  { useState } from 'react';
import Loader from "../Loader/Loader";
import { Member } from "../Member/Member";
import "./MemberList.css";
import Config from "react-confetti";

function MemberList() {
    const [luckyPerson,setLuckyPerson]=useState("");
    const [isLoading,setLoading]=useState(false);
    const [showCelebration,setShowCelebration]=useState(false);
    const people=[
        {name:"Ravi",city:"Hyderabad"},
        {name:"Ramu",city:"Kkd"},
        {name:"Nani",city:"Ban"},
        {name:"Lakshmi",city:"kkd"},
        {name:"Devi",city:"chennai"},
        {name:"Syam",city:"Ban"},
        {name:"Ramesh",city:"kkd"},
        {name:"Garal",city:"chennai"},
        {name:"Lakshmi",city:"kkd"},
        {name:"Devansh",city:"chennai"},
        {name:"Somesh",city:"Ban"},
        {name:"Rajesh",city:"kkd"},
        {name:"Ganga",city:"chennai"},
        {name:"Roja",city:"Hyderabad"},
        {name:"Rani",city:"Kkd"},
        {name:"Naresh",city:"Ban"},
        {name:"Ajay",city:"kkd"},
        {name:"Ravi",city:"Hyderabad"},
        {name:"Ramu",city:"Kkd"},
        {name:"Nani",city:"Ban"},
        {name:"Lakshmi",city:"kkd"},
        {name:"Devi",city:"chennai"},
        {name:"Syam",city:"Ban"},
        {name:"Ramesh",city:"kkd"},
        {name:"Garal",city:"chennai"},
        {name:"Lakshmi",city:"kkd"},
        {name:"Devansh",city:"chennai"},
        {name:"Somesh",city:"Ban"},
        {name:"Rajesh",city:"kkd"},
        {name:"Ganga",city:"chennai"},
        {name:"Rani",city:"Kkd"},
        {name:"Naresh",city:"Ban"},
        {name:"Ajay",city:"kkd"},
        {name:"Ravi",city:"Hyderabad"},
        {name:"Ramu",city:"Kkd"},
        {name:"Nani",city:"Ban"},
        {name:"Lakshmi",city:"kkd"},
        {name:"Devi",city:"chennai"},
        {name:"Syam",city:"Ban"},
        {name:"Ramesh",city:"kkd"},
        {name:"Garal",city:"chennai"},
        {name:"Lakshmi",city:"kkd"},
        {name:"Devansh",city:"chennai"},
        {name:"Somesh",city:"Ban"},
        {name:"Rajesh",city:"kkd"},
        {name:"Ganga",city:"chennai"},
        
      ];

      function Picker() {
        setLoading(true);
    const randomPerson =Math.floor(Math.random()*people.length);

    const person = people[randomPerson]
    const luckyMessage = `${person.name} from ${person.city}`;
  
    setTimeout(function(){
        setLuckyPerson(luckyMessage);
        setLoading(false);
        setShowCelebration(true);
        
     
    },3000
    );
   
      }
      
  
    return ( 
        <div>
          
        <h1 className="margin-10">Members</h1>
        
        <div className="members-container">
        {people.map(function(member){
         return  <Member name ={member.name} city={member.city}/>
        })}
     
        </div>
     <div>
        {showCelebration && <Config numberOfPieces={1000}/>}
        {isLoading && <h3 className="l">Loading..</h3>}
        <h2 className="p">{luckyPerson}</h2>
        <Loader text="Lucky Draw" onClick={Picker}/>
        </div>
        </div>
        
        
     );
}

export default MemberList;
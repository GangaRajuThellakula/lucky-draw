 import "./Member.css";
export function Member({name , city}){
    // const Mname=values.name;
    // const Mcity=values.city;
   // const {name,city} = values;
    return (
        <div className="Members">
        <h2>{name}</h2>
        <h2>{city}</h2>
    </div>
    );
}




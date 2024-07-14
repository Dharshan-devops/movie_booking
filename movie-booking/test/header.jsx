import React from "react";
import "./header.css"
function Heading({isCondition,user}){
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];

    // const items=people.map(names => <li>{names}</li>)
    const filters=people.filter(person=>person.profession=="chemist")
    const items=filters.map(names=><li>{names.name}, profession: {names.profession}</li>)

    if(isCondition){
    return(
        <div>
        <p className="heading">
            Hello {user.name} welcome to the site 
        </p>

        <p id="test">
            Thanks for visiting
            {items}
        </p>
        </div>
    )
    }
};

export default Heading
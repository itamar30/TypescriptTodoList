import React from 'react'
import {Istate as Iprops} from '../App'

const List = ({people}: Iprops) => {

    const renderList = () : JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="List" key={person.name}>
                <div className="List-header">
                    <img className="List-img" src={person.img}/>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.notes}</p>
            </li>
            )
        })
    }
  return (
    <div>
        <div className='myTitle1'>List of Perople</div>
        <div className='myTitle'>Some Img url to paste</div>
        <div className='myUrl'>
        https://scontent.ftlv20-1.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=okS-S4LO3HQAX8PSsxO&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfD-Xnt4gj0JBiHTYJdHuOrwgGXbsGOuFdlhvW31GA30Wg&oe=6492E096</div>
        {renderList()}
    </div>
    
  )
}

export default List
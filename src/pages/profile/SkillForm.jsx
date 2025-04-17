import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../../services/axiosInstance'
import { UserContext } from '../../services/UserContext'

export default function SkillForm() {
    const [skillsData , setSkillsData] = useState([])
    const [newSkill , setNewSkill] = useState([])
    let {add} = useContext(UserContext)
        useEffect(()=>{
          // console
            axiosInstance.get('/skills')
            .then(data=>{
                setSkillsData(data)
            })
        },[])

        const handleSubmit = (e)=>{
            e.preventDefault();
            console.log(newSkill)
            let selectedSkill = skillsData.find(s=>s._id == newSkill)
            add(selectedSkill)
        }
  return (
    <form onSubmit={handleSubmit}>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <select onChange={(e)=>setNewSkill(e.target.value)}>
            <option value="">-- Select a skill --</option>
            {skillsData.map((item , index)=>{
                return  <option key={index} value={item._id}>{item.name}</option>
            })}
           
    
          </select>
        </div>
        <button className="btn btn-primary" type="submit">Add Skill</button>
      </form>
  )
}

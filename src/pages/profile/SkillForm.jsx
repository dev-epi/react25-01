import React, { useEffect, useState } from 'react'
import axiosInstance from '../../services/axiosInstance'

export default function SkillForm({pushSkill}) {
    const [skillsData , setSkillsData] = useState([])
    const [newSkill , setNewSkill] = useState([])
        useEffect(()=>{
            axiosInstance.get('/skills')
            .then(data=>{
                setSkillsData(data)
            })
        },[])

        const handleSubmit = (e)=>{
            e.preventDefault();
            console.log(newSkill)
            let selectedSkill = skillsData.find(s=>s._id == newSkill)
            pushSkill(selectedSkill)
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

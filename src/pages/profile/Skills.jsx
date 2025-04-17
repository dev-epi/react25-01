import React, { useEffect, useState } from 'react'
import SkillForm from './SkillForm'

export default function Skills({user , handlePush}) {
    
  return (
    <div>
        <SkillForm pushSkill={handlePush} />
         <ul style={{marginTop: '20px'}}>
        {
          user?.skills?.map((item , index)=>{
            return <li key={index}>{item.name}</li>
          })
        }
        
      </ul>
    </div>
  )
}

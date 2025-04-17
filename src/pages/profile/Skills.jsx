import SkillForm from './SkillForm'

export default function Skills({user }) {
    
  return (
    <div>
        <SkillForm  />
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

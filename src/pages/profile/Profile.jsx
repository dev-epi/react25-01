

export default function Profile() {
  return (
    <div className="container">
      <div className="card">
      <h2>Personal Information</h2>
      <form>
        <div className="avatar">
          <img src="https://via.placeholder.com/150" alt="Avatar" />
          <input type="file" accept="image/*" />
        </div>
        
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="text" placeholder="Full Name" value="Nourhene Amara" />
        </div>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="email" placeholder="Email" value="nourhene@example.com" />
        </div>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="tel" placeholder="Phone Number" value="+216 99 999 999" />
        </div>
        <button className="btn btn-secondary" type="submit">Save Info</button>
      </form>
    </div>


    <div className="card">
      <h2>Work Experience</h2>
      <form>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="text" placeholder="Job Title" />
        </div>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="text" placeholder="Company Name" />
        </div>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="text" placeholder="Start Year" />
          <input type="text" placeholder="End Year" />
        </div>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="text" placeholder="Short Description" />
        </div>
        <button className="btn btn-primary" type="submit">Add Experience</button>
      </form>

      <ul style={{marginTop: '20px'}}>
        <li>
          <strong>Software Engineer</strong> at ABC Corp (2022 - 2023)
          <button className="edit">✏️</button>
          <button className="close">🗑️</button>
        </li>
      </ul>
    </div>


    <div className="card">
      <h2>Skills</h2>
      <form>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <select>
            <option value="">-- Select a skill --</option>
            <option value="JavaScript">JavaScript</option>
            <option value="PHP">PHP</option>
            <option value="React.js">React.js</option>
            <option value="Node.js">Node.js</option>
            <option value="Laravel">Laravel</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">Add Skill</button>
      </form>

      <ul className="rating" style={{marginTop: '20px'}}>
        <li>React.js</li>
        <li>Node.js</li>
      </ul>
    </div>
    </div>
  )
}

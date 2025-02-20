import avatar from '../assets/react.svg'
import avatarpublic from '/vite.svg'
export default function Home() {
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="card">
          <div className="avatar">
            {/* image from src  */}
            <img src={avatar} alt="" />
            {/* image from public with import */}
            <img src={avatarpublic} alt="" />
            {/* image from public without import */}
            <img src='/vite.svg' alt="" />
          </div>
          <h2>Foulen Ben Foulen</h2>
          <div className="rating">
            <h4>6.4</h4>
            <h4>8 feedbacks</h4>
          </div>
          <button className="btn btn-primary">
            <a href="user.html"> CV </a>
          </button>
          <button className="btn btn-secondary">
            <a href="feedbacks.html"> Feedbacks </a>
          </button>
        </div>
      </div>
    </div>
  );
}

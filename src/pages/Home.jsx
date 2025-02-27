// import avatar from '../assets/react.svg'
// import avatarpublic from '/vite.svg'
import { Link } from "react-router-dom";
import { users } from "../data/users";
import Card from "../ui/Card";
export default function Home() {
  const usersList = users;
  return (
    <div className="row">
      {usersList.map((user, index) => {
        return (
          <div className="col-md-3" key={index}>
            <Card>
              <div className="avatar">
                {/* image from src  
              <img src={avatar} alt="" />
               image from public with import
              <img src={avatarpublic} alt="" />*/}
                {/* image from public without import */}
                <img src="/vite.svg" alt="" />
              </div>
              <h2>
                {user.firstName} {user.lastName}
              </h2>
              <div className="rating">
                <h4>6.4</h4>
                <h4>8 feedbacks</h4>
              </div>
              <Link to={'/user/'+user._id}>
                <button className="btn btn-primary">CV</button>
              </Link>
              <button className="btn btn-secondary">
                <a href="feedbacks.html"> Feedbacks </a>
              </button>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

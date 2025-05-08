import { useDispatch, useSelector } from "react-redux";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";
import FeedbackStats from "./FeedbackStats";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserFeedbacks } from "../../redux/feedbackSlice";

export default function Feedbacks() {
  const {userId} = useParams()
  const dispatch = useDispatch();
  const {data , status , error} = useSelector(state=>state.feedbacks)
  useEffect(()=>{
    dispatch(getUserFeedbacks(userId))
    console.log(data)
  } , [dispatch , userId ])

  if(status == 'Pending') return <h1>Loading..</h1>
  return (
    <div className="container">
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </div>
  );
}

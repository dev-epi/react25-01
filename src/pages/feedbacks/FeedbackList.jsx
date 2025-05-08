import Card from '../../ui/Card'

export default function FeedbackList() {
  return (
    <div className="feedback-list">
        <Card className="card">
          <button className="close">X</button>
          <div className="num-display">9</div>
          <div className="text-display">Awesome</div>
        </Card>
        <div className="card">
          <button className="close">X</button>
          <div className="num-display">9</div>
          <div className="text-display">Good Job</div>
        </div>
        <div className="card">
          <button className="close">X</button>
          <div className="num-display">9</div>
          <div className="text-display">Not Bad</div>
        </div>
        <div className="card">
          <button className="close">X</button>
          <div className="num-display">9</div>
          <div className="text-display">Awesome</div>
        </div>
      </div>
  )
}

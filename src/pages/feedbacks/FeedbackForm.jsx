import Card from '../../ui/Card'

export default function FeedbackForm() {
  return (
    <Card>
        <form>
          <h2>How would you rate your service with us ?</h2>
          <ul className="rating">
            <li>
              <input type="radio" id="num1" name="rating" value="1" />
              <label htmlFor="num1">1</label>
            </li>
            <li>
              <input type="radio" id="num2" name="rating" value="2" />
              <label htmlFor="num2">2</label>
            </li>
            <li>
              <input type="radio" id="num3" name="rating" value="3" />
              <label htmlFor="num3">3</label>
            </li>
            <li>
              <input type="radio" id="num4" name="rating" value="4" />
              <label htmlFor="num4">4</label>
            </li>
            <li>
              <input type="radio" id="num5" name="rating" value="5" />
              <label htmlFor="num5">5</label>
            </li>
            <li>
              <input type="radio" id="num6" name="rating" value="6" />
              <label htmlFor="num6">6</label>
            </li>
            <li>
              <input type="radio" id="num7" name="rating" value="7" />
              <label htmlFor="num7">7</label>
            </li>
            <li>
              <input type="radio" id="num8" name="rating" value="8" />
              <label htmlFor="num8">8</label>
            </li>
            <li>
              <input type="radio" id="num9" name="rating" value="9" />
              <label htmlFor="num9">9</label>
            </li>
            <li>
              <input type="radio" id="num10" name="rating" value="10" />
              <label htmlFor="num10">10</label>
            </li>
          </ul>
          <div className="input-group">
            <input type="text" placeholder="Write a review" />
            <button type="submit" className="btn btn-secondary">
              Send
            </button>
          </div>
          <div className="message">for error messages</div>
        </form>
      </Card>
  )
}

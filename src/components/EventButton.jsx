import PropTypes from "prop-types"

function Button({ type, text, extraClass, event }) {
  return (
    <button
      type={type}
      className={`btn ${extraClass}`}
      onClick={event}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  extraClass: PropTypes.string,
  event: PropTypes.func
}

Button.defaultProps = {
  type: "click",
  extraClass: "",
  text: "...",
  event: ()=>{}
}

export default Button
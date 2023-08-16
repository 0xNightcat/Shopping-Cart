import './Button.css';

const Button = (props) => {
   return (
      <button className={props.class} onClick={props.click}>
      {props.children}
      </button>
   )
}

export default Button;
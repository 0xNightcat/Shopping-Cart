import './Alert.css';

const Alert = (props) => {
   return (
      <div className='alert' style={{
         left: props.alertState ? '30px' : '-100%',
         transition: props.alertState==false ? '0.5s' : '0.1s'
      }}>
         <p className={props.class}>{props.text}</p>
      </div>
   )
}

export default Alert;

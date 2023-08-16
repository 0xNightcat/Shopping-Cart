import './Pros.css';

const Pros = (props) => {
   return (
      props.items.map(item => {
         return (
            <div key={item.id} id={item.id} className='pro-item'>
               <div className='left'>
                  <img alt='pro-img' width='60px' height='60px' src={item.img} />
                  <span className='title'>{item.title}</span>
               </div>
               <div className='price'>$<span className='prc'>{item.price}</span></div>
               <div className='amount'>
                  <a href='#test' className='dec' onClick={props.dec}>-</a>
                  <span className='number'>{item.amount}</span>
                  <a href='#test' className='inc' onClick={props.inc}>+</a>
               </div>
               <a href='#test' className='remove' onClick={props.removeItem}>X</a>
            </div>
         )
      })
   )
}

export default Pros;
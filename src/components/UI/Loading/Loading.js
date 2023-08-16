import './Loading.css';

import loading from '../../../assets/images/loading.gif';

const Loading = (props) => {
   return (
      <div className='loading'>
         <img src={loading} width='100' height='100' />
         <h2>Loading...</h2>
      </div>
   )
}

export default Loading;
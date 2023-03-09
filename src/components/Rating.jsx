import starFull from '../images/starFull.svg'
import starEmpty from '../images/starEmpty.svg'


const Rating = ({ element, rating }) => {


    return (

        <img src={element > rating ? starEmpty : starFull} alt='star'></img>

    )
};

export default Rating;
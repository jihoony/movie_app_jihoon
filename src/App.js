import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
//  console.log(props);
return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
);
}

const foodILike = [
  {
    id:1,
    name:'Kimchi',
    image:'http://www.mknews.kr/files/attach/news/20170705095650-tmp.jpg',
    rating: 5,
  },
  {
    id:2,
    name:'Samgyeopsal',
    image: 'https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?resize=750%2C600&ssl=1',
    rating: 4.9,
  },
  {
    id:3,
    name:'Bibimbap',
    image:'http://www.koreadailyus.com/wp-content/uploads/2016/01/vegetarian-bibimpbap.jpg',
    rating: 3,
  },
  {
    id:4,
    name: 'Doncasu',
    image: 'https://cdn.pixabay.com/photo/2016/09/23/23/23/restaurant-1690696_960_720.jpg',
    rating: 4.2,
  },
  {
    id:5,
    name: 'Kimbab',
    image: 'https://www.maangchi.com/wp-content/uploads/2014/08/gimbap.jpg',
    rating: 3,
  }
];

function App() {
  // console.log(foodILike.map(renderFood));
  return ( 
    <div>
      {foodILike.map(dish=>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div> 
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;

import { useState } from 'react';
import '../styles/Store.scss';
import Navbar from './Navbar';
import Catalog from './Catalog';

const defaultCatalog = [
  { name: 'Strawberry Bars', image: '/images/catalog/strawberry-bars.jpeg', price: '1.50' },
  { name: 'Browies', image: '/images/catalog/browies.jpeg', price: '2.50' },
  { name: 'French Toast', image: '/images/catalog/french-toast.jpeg', price: '3.50' },
  { name: 'Pancakes', image: '/images/catalog/pancakes.jpeg', price: '3' },
  { name: 'Deluxe Pancakes', image: '/images/catalog/deluxe-pancakes.jpeg', price: '8' },
  { name: 'Christmas Cupcake', image: '/images/catalog/christmas-cupcake.jpeg', price: '4' },
  { name: 'Cupcake Box', image: '/images/catalog/cupcake-box.jpeg', price: '12' },
  { name: 'Chesecake', image: '/images/catalog/chesecake.jpeg', price: '6' },
  { name: 'Pumpkin Pie', image: '/images/catalog/pumpkin-pie.jpeg', price: '11' },
];

function Store() {
  const [catalog, setCatalog] = useState(defaultCatalog);

  function filter(button) {
    if (button == 'all') {
      setCatalog(defaultCatalog);
    }

    if (button == 'pancakes') {
      setCatalog([defaultCatalog[3], defaultCatalog[4]]);
    }

    if (button == 'cupcakes') {
      setCatalog([defaultCatalog[5], defaultCatalog[6]]);
    }

    if (button == 'cakes/pies') {
      setCatalog([defaultCatalog[7], defaultCatalog[8]]);
    }

    if (button == 'luxury') {
      setCatalog([defaultCatalog[4], defaultCatalog[7]]);
    }
  }

  return (
    <div>
      <header>
        <Navbar />
        <div className='background2'></div>
      </header>
      <div className='store'>
        <h2>Our</h2>
        <div className='filter'>
          <div><button onClick={() => filter('all')}><span>All</span></button></div>
          <div><button onClick={() => filter('pancakes')}><span>Pancakes</span></button></div>
          <div><button onClick={() => filter('cupcakes')}><span>Cupcakes</span></button></div>
          <div><button onClick={() => filter('cakes/pies')}><span>Cakes / Pies</span></button></div>
          <div><button onClick={() => filter('luxury')}><span>Luxury</span></button></div>
        </div>
        <Catalog catalog={catalog}></Catalog>
      </div>
      <footer className='footer'>
      <h3>Info</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores!</p>
      </footer>
    </div>
  );
}

export default Store;

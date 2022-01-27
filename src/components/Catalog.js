function Catalog({ catalog }) {
  return (
    <div className='catalog'>
        {
            catalog.map((item, index) => {
                return <div className='item'>
                    <div className='img' style={{ backgroundImage: `url(${item.image})` }}></div>
                    <div className='info' >
                        <h3>{item.name}</h3>
                        <h4>{item.price}$</h4>
                    </div>
                </div>
            })
        }
    </div>
  );
}

export default Catalog;

import ProductCard from './ProductCard';


export default function Products({ products = [] }) {
    console.log(products); //Check product obj and its props

  return (
    <section className='flex flex-col mt-6 lg:flex-row'>
      <div className='container w-11/12 mx-auto lg:mb-8'>
        <h1 className='text-2xl leading-6 tracking-tight-custom font-bold mb-5 lg:text-3xl'>Kies je favoriet</h1>
          <div className='columns-2 gap-x-3 my-2.5 md:gap-x-4 lg:flex'>
          {products.map((product => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            )))}
          </div>  
      </div>  
    </section>
  );
}





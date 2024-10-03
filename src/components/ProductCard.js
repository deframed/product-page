import PriceBtn from '@/components/PriceBtn';


const ProductCard = ({ name, price, imageUrl}) => {

  return (
    <div className='flex flex-col mb-10 h-72 md:h-350 md:w-full lg:h-400 '>
      <div className='relative flex flex-col justify-center bg-air-blue h-full rounded-xl'>
        <PriceBtn price={price} />
        <img src={imageUrl} alt={name} className="h-28 self-center md:h-36 lg:h-40"/>
      </div>    
      <div className='flex flex-col bg-white text-base font-black tracking-wide mt-2.5 lg:mt-5'>
        <h2 className='lg:text-xl'>{name}</h2>
        <p className='lg:text-lg'>€{price}</p>
      </div>  
    </div>
  );
};

export default ProductCard;


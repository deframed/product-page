export default function PriceBtn({ price, onClick }) {
    const formattedPrice = price.toFixed(2).split('.'); 
    
    return (
        <button className='inline-block absolute self-end top-0 text-white text-9 bg-ballpoint-blue rounded-md font-semibold py-1 px-3 m-3 lg:m-4'
            onClick={onClick}>
            <span className="text-base align-baseline font-semibold">€{formattedPrice[0]}.</span>
            <span className="text-7 align-super">{formattedPrice[1]}</span>
        </button>
    );
  };

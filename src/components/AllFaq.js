import FaqCard from './FaqCard';

const AllFaq = ({ faqs }) => {
  
    return (
        <section className='flex flex-col bg-air-darker-blue min-h-screen sm:mx-auto sm:w-full'>
            <div className='container w-11/12 mx-auto '>
                <h1 className='text-2xl leading-6 tracking-tight-customh font-bold mt-7 mb-10 lg:text-4xl lg:mt-20 lg:mb-10'>Veelgestelde vragen</h1>
                <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-0.5 '>
                    {faqs.map(faq => (
                        <FaqCard key={faq.id} question={faq.question} answer={faq.answer} />
                    ))}
                </div>

            </div>
        </section>
    );
    };

export default AllFaq;




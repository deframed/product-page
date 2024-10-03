import ArrowBtn from '@/components/ArrowBtn';


const FaqCard =({ question, answer }) => {

    return (
        <details className="group bg-white rounded-custom-10 p-5 mb-2.5">
            <summary className="flex justify-between items-center cursor-pointer">
                <h3 className='text-lg font-bold leading-6 '>{question}</h3>
                <ArrowBtn />
            </summary>
            <p className='opacity-80 pt-8 pb-4'>{answer}</p>
        </details>
    );
};

export default FaqCard;






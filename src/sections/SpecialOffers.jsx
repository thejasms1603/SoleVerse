import {offer} from '../assets/images';
import { arrowRight} from '../assets/icons'
import Button from '../components/Button';
const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          className='object-contain w-full'
          src={offer}
          width={773}
          height={687}
          alt='Shoe Promotion'
        />
      </div>
      <div>
        <div className='flex flex-1 flex-col'>
          <h2 className='font-montserrat capitalize  text-4xl lg:max-w-lg font-bold'>
            <span className='text-coral-red '> Special </span> Offer
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
            Embark on a shopping journey that transforms your experience with
            unmatched offers. From top-tier collections to exceptional savings,
            we provide unrivaled value that truly stands out.
          </p>
          <p className='mt-6 lg:max-w-lg info-text'>
            Explore a world of possibilities crafted to meet your unique desires
            and exceed even the highest expectations. Your journey with us
            promises to be nothing less than extraordinary.
          </p>
          <div className='mt-11 flex flex-wrap gap-4'>
            <Button label='Shop Now' iconURL={arrowRight}></Button>
            <Button
              label='Learn More'
              backgroundColor='bg-white'
              borderColor='border-slate-gray'
              textColor='border-slate-gray'
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers
import { shoe8 } from "../assets/images";
import  Button  from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-montserrat capitalize  text-4xl lg:max-w-lg font-bold'>
          We Provide you
          <span className='text-coral-red '> Super </span>
          <span className='text-coral-red'>Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          We deliver exceptional quality footwear designed to elevate your
          style. Experience the perfect blend of comfort, durability, and
          elegance with every step.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our Dedication to detail and excellence ensures your satisfaction</p>
       <div className="mt-11">
        <Button label="view details"></Button>
       </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img className="object-contain" src={shoe8} alt="Shoe8" width={570} height={522} />
      </div>
    </section>
  );
};

export default SuperQuality;

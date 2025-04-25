import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid'


const Burger = ({ open, setOpen }) => {
    return (
      <Bars3CenterLeftIcon className="text-white w-10 cursor-pointer" onClick={() => setOpen(!open)}>
      </Bars3CenterLeftIcon>
    );
  };

  export default Burger
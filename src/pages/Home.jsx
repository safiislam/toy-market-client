import ImageGellary from "../Shared/ImageGellary";
import Slider from "../Shared/Slider";
import ToyTab from "../Shared/ToyTab";


const Home = () => {
    return (
        <div>
           <Slider />
          <ImageGellary />
          <div className="my-10 h-96">
          <ToyTab />
          </div>
        </div>
    );
};

export default Home;
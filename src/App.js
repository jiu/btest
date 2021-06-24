import "./App.css";
import Header from "./components/pageLayout/header";
import Breadcrumb from "./components/pageLayout/breadcrumb";
import ParkingDays from "./components/parts/parkingDays";

function App() {
  return (
    <div className="bg-gray-50 md:flex h-screen w-screen">
      <Header />
      <div className="container px-4 md:px-8">
        <h1 className=" font-sans font-bold mt-7 text-2xl text-blue">
          Planning Period
        </h1>
        <Breadcrumb />
        <p className="mb-4 text-blue font-sans">
          You can choose here and create the number of day that allows a user to
          book your parking in advance
        </p>
        <ParkingDays />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/pageLayout/header";
import Breadcrumb from "./components/pageLayout/breadcrumb";
import ParkingDays from "./components/parts/parkingDays";

function App() {
  return (
    <div className="bg-gray-50 md:flex h-screen w-screen">
      <Header />
      <div className="container p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Planning Period
        </h1>
        <Breadcrumb />
        <p className="mb-4">
          You can choose here and create the number of day that allows a user to
          book your parking in advance
        </p>
        <ParkingDays />
      </div>
    </div>
  );
}

export default App;

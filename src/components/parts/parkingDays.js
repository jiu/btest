import { useState } from "react";
import ParkingDayCard from "./parkingDayCard";

function ParkingDays() {
  //Default
  const [pday, setDays] = useState([
    { id: 1, days: 1, favorite: false },
    { id: 5, days: 5, favorite: false },
    { id: 7, days: 7, favorite: false },
    { id: 15, days: 15, favorite: false },
    { id: 30, days: 30, favorite: false },
  ]);

  //Add day card
  //const addDays =

  //set favorite
  const switchFavorite = (id) => {
    setDays(
      pday.map((day) =>
        day.id === id ? { ...day, favorite: !day.favorite } : day
      )
    );
  };
  //delete card
  const deleteCard = (id) => {
    setDays(pday.filter((day) => day.id !== id));
  };
  return (
    <div className="md:bg-white md:shadow-lg md:rounded-lg md:p-4 flex flex-wrap">
      {pday.length > 0 ? (
        // If there are items
        <>
          {pday.map((item) => (
            <ParkingDayCard
              item={item}
              switchFavorite={switchFavorite}
              deleteCard={deleteCard}
              key={item.id}
            />
          ))}
        </>
      ) : (
        // No todo items
        <p>You're all caught up!</p>
      )}
    </div>
  );
}

export default ParkingDays;

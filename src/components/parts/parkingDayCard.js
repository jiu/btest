import { AiOutlineStar, AiFillStar, AiFillMinusCircle } from "react-icons/ai";
import PropTypes from "prop-types";
function ParkingDayCard(props) {
  return (
    <div className="md:bg-white md:shadow-lg md:rounded-lg md:p-4 mx-2 text-gray-900 w-24 h-auto flex flex-col ">
      {props.item.favorite ? (
        <div className="flex justify-between">
          <AiFillStar onClick={() => props.switchFavorite(props.item.id)} />
          <AiFillMinusCircle className="duration-200 transition-opacity opacity-0" />
        </div>
      ) : (
        <div className="flex justify-between">
          <AiOutlineStar onClick={() => props.switchFavorite(props.item.id)} />
          <AiFillMinusCircle
            onClick={() => props.deleteCard(props.item.id)}
            className="duration-200 transition-opacity opacity-100"
          />
        </div>
      )}
      <div className="self-center flex flex-col justify-center items-center">
        <span className="text-4xl">{props.item.days}</span>
        <span>days</span>
      </div>
    </div>
  );
}

ParkingDayCard.propType = {
  item: PropTypes.object.isRequired,
  switchFavorite: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default ParkingDayCard;

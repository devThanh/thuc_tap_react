import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addProduct } from "../features/productSlice";

function FoodCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="card-container">
      <div className="card-top">
        <img src={props.foodImage} alt="food" className="card-img" />
        <p>{props.foodName}</p>
        <p className="food-description">{props.foodDescription}</p>
      </div>
      <div className="card-bottom">
        <p> {props.foodPrice} </p>
        <p
          className="addCart-btn"
          onClick={(e) => {
            dispatch(
              addProduct({
                id: props.meal.id,
                MealName: props.meal.name,
                MealDescription: props.meal.ingredient,
                MealPrice: props.meal.price,
                MealImage: props.meal.image,
              })
            );
            navigate(`product/${props.id}`);
          }}
        >
          Add to cart
        </p>
      </div>
    </div>
  );
}

export default FoodCard;

import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { getFilterCategory } from "../api";
import { Preloader } from "../components/Preloader";

import { MealList } from "../components/MealList";

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFilterCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return <>
        <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
        {!meals.length ? <Preloader /> : <MealList meals={meals}/>}
    </>
}

export {Category}
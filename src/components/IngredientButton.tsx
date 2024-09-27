import React from "react";
import {Ingredient} from "../types";
import deleteIng from '../assets/deleteIng.png';

interface IngredientButtonProps {
    ingredient: Ingredient;
    count: number;
    onAdd: (ingredient: Ingredient) => void;
    onRemove: (ingredient: Ingredient) => void;
}

const IngredientButton: React.FC<IngredientButtonProps> = ({ingredient, count, onAdd, onRemove}) => {
    return (
        <div className="btn-div">
            <button className="addIng"
                    onClick={() => onAdd(ingredient)}
                    type="button">
                <img className="ing-img"
                     src={ingredient.image}
                     alt={ingredient.name}
                />
                <div className='ing-text'>
                    <span className='ing-name'>{ingredient.name}</span>
                    <span className="ingredients-count">x{count}</span>
                </div>
            </button>
            <button className="deleteIng"
                    onClick={() => onRemove(ingredient)}>
                <img src={deleteIng}
                     alt="delete"
                     width="20px"
                />
            </button>
        </div>
    );
};
export default IngredientButton;
import './App.css'
import React, {useState} from "react";
import IngredientButton from "./components/IngredientButton.tsx";
import Burger from "./components/Burger.tsx";
import {INGREDIENTS} from "./ingredient.ts";
import {Ingredient} from "./types";

const BASE_PRICE = 30;

const App: React.FC = () => {
    const [ingredients, setIngredients] = useState<{ [key: string]: number }>({});
    const handleAddIngredient = (ingredient: Ingredient) => {
        setIngredients((prev) => ({
            ...prev,
            [ingredient.name]: (prev[ingredient.name] || 0) + 1,
        }));
    };
    const handleRemoveIngredient = (ingredient: Ingredient) => {
        setIngredients((prev) => {
            const newCount = (prev[ingredient.name] || 0) - 1;
            if (newCount <= 0) {
                const {[ingredient.name]: _, ...rest} = prev;
                return rest;
            }
            return {
                ...prev,
                [ingredient.name]: newCount,
            };
        });
    };
    const calculateTotalPrice = () => {
        return Object.entries(ingredients).reduce(
            (total, [name, count]) => {
                const ingredient = INGREDIENTS.find((ing) => ing.name === name);
                return total + (ingredient ? ingredient.priceUnit * count : 0);
            },
            BASE_PRICE
        );
    };
    return (
        <>
            <div className="ingredients-burger">
                <label className="ingredients-label">Ingredients</label>
                <div className="ingredients">
                    {INGREDIENTS.map((ingredient) => (
                        <IngredientButton
                            key={ingredient.name}
                            ingredient={ingredient}
                            count={ingredients[ingredient.name] || 0}
                            onAdd={handleAddIngredient}
                            onRemove={handleRemoveIngredient}
                        />
                    ))}
                </div>
                <Burger ingredients={ingredients}/>
            </div>
            <div className="controls">
                <button onClick={() => setIngredients({})} type="button">Удалить все ингредиенты</button>
                <p>Общая цена: {calculateTotalPrice()} сом</p>
            </div>
        </>
    );
};

export default App

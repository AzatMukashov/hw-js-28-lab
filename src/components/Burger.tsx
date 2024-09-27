import React from "react";

interface BurgerProps {
    ingredients: { [key: string]: number };
}

const Burger: React.FC<BurgerProps> = ({ingredients}) => {
    return (
        <div className="burger-div">
            <label className='label-burger'>Burger</label>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {Object.entries(ingredients).map(([name, count]) =>
                    Array.from({length: count}).map((_, index) => (
                        <div key={name + index} className={name}></div>
                    ))
                )}
                <div className="BreadBottom"></div>
            </div>
        </div>
    );
};

export default Burger;
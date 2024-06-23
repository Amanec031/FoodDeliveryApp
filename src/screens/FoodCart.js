import React from 'react';
import Card from '../components/card'; // Ensure the correct import for the Card component

const FoodCart = ({ category, items, search }) => {
    return (
        <div className="my-4">
            <h2>{category.CategoryName}</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {items.length > 0 ? (
                    items
                        .filter((item) => item.CategoryName === category.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                        .map((filteredItem) => (
                            <div key={filteredItem._id} className='col'>
                                <Card foodName={filteredItem.name} options={filteredItem.options[0]} imgSrc={filteredItem.img} />
                            </div>
                        ))
                ) : (
                    <div>No items found</div>
                )}
            </div>
        </div>
    );
};

export default FoodCart;

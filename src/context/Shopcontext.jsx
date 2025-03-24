import { createContext, useContext, useState, useEffect } from 'react';
import { food_list } from '../assets/frontend_assets/assets';
export const ShopContext = createContext(null);
export const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addtoCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };


    const removeFromcart=(itemId)=>{
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalamount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const product = food_list.find((product) => product._id === itemId);
                if (product) {
                    totalAmount += product.price * cartItems[itemId];
                }
            }
        }
        return totalAmount;
    };

   useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const value = {
        cartItems,
        addtoCart,
        removeFromcart,
        food_list,getTotalamount
        

    
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider

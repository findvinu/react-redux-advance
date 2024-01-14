import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCardData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending card data",
        })
      );

      const response = await fetch(
        "https://react-redux-toolkit-82fc1-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending card data failed");
      }

      const responseData = await response.json();
    };

    sendCardData();
  }, [cart]);
  console.log("cart", cart);
  return (
    <Layout>
      {showCart || (cart.items.length >= 1 && <Cart />)}
      <Products />
    </Layout>
  );
}

export default App;

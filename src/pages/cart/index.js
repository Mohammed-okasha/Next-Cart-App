import Head from "next/head";
import Banner from "@/components/UI/Banner";
import Cart from "@/components/Cart/Cart";
//================================================================
const CartPage = (props) => {
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta
          name="description"
          content="View all of your products added to the shopping cart"
        />
      </Head>
      <Banner pageTitle="cart page" />
      <Cart />
    </>
  );
};

export default CartPage;

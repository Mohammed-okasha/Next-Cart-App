import CartProvider from "@/context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Layout
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </>
  );
}

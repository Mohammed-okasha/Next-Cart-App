import Head from "next/head";
import Banner from "@/components/UI/Banner";
import Products from "@/components/Products/Products";
//================================================================
const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Browse our products" />
      </Head>
      <Banner pageTitle="home page" />
      <Products products={props.products} />
    </>
  );
};

export default HomePage;
//================================================================
// Fetch Products
export const getStaticProps = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (res.status !== 200 && !res.ok) {
      return {
        props: { message: "could not fetch products!", status: res.status },
      };
    }

    const data = await res.json();

    return {
      props: {
        products: data,
      },
      revalidate: 1000,
    };
  } catch (error) {
    console.log(error.message);
  }
};

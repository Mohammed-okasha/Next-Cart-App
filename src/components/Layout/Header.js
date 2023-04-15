import React, { useContext } from "react";
import CartContext from "@/context/cart-context";
import Container from "../UI/Layouts/Container";
import Logo from "./Logo";
import CartButton from "./CartButton";
import classes from "./Header.module.scss";

const Header = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.row}>
          <Logo className={classes.logo} />
          <CartButton totalCartItems={totalItems} />
        </div>
      </Container>
    </header>
  );
};

export default Header;

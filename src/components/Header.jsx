import { Button, IconButton } from "@mui/material";
import logoImg from "../assets/logo.jpg";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Logo" />
        <h1>ReactMeals</h1>
      </div>
      <div>
        <nav>
          {/* <button>Cart {0}</button> */}
          <Button size="small" variant="contained">
            Cart ({0})
          </Button>
          {/* <IconButton color="primary" aria-label="add to shopping cart">
            Cart
          </IconButton> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;

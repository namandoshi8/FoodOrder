// // import { Button } from "@mui/material";
// import logoImg from "../assets/logo.jpg";
// import Button from "./UI/Button";
// function Header() {
//   return (
//     <header id="main-header">
//       <div id="title">
//         <img src={logoImg} alt="Logo" />
//         <h1>ReactMeals</h1>
//       </div>
//       <div>
//         <nav>
//           {/* <button>Cart {0}</button> */}
//           <Button>Cart ({0})</Button>
//           {/* <IconButton color="primary" aria-label="add to shopping cart">
//             Cart
//           </IconButton> */}
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;
import { useContext } from "react";

import Button from "./UI/Button.jsx";
import logoImg from "../assets/logo.jpg";
import CartContext from "../store/CartContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}

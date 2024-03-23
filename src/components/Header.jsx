import Grid from "@mui/material/Grid";
import "./Header.css";
import Cart from "./icons/Cart.png";
import Search from "./icons/Search.png";
const Header = () => {
  return (
    <>
      <Grid container spacing={12}>
        <Grid item xs={3}>
          <div className="logo">ECOMMERCE</div>
        </Grid>
        <Grid item xs={6}>
          <div className="container">
            <ul>
              <li className="headerText">Categories</li>
              <li className="headerText">Sale</li>
              <li className="headerText">Clearance</li>
              <li className="headerText">New Stock</li>
              <li className="headerText">Trending</li>
            </ul>
          </div>
          <div className="offer">
            {"<    Get 10% off on business sign up   >"}
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="cornerContainer">
            <ul>
              <li className="rightText">Help</li>
              <li className="rightText">Orders&Returns</li>
              <li className="rightText">Hi,john</li>
            </ul>
          </div>
          <div className="asset">
            <img src={Search} alt="" />
            <img src={Cart} alt="" />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default Header;

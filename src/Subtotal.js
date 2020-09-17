import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
//import { ShoppingBasketOutlined } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useStateValue } from './StateProvider';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket}, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
                 <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
                <CheckBoxOutlineBlankIcon className='subtotal__checkbox'/>This order contains a gift
              {/* <input type="checkbox " /> This order contains a gift */}
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$EC "}
      />

      <Button>Proceed to Checkout</Button>
    </div>
  );
}

export default Subtotal;

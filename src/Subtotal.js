import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
//import { ShoppingBasketOutlined } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>0</strong>
            </p>
            <small className="subtotal__gift">
                <CheckBoxOutlineBlankIcon className='subtotal__checkbox'/>This order contains a gift
              {/* <input type="checkbox " /> This order contains a gift */}
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"XCD"}
      />

      <Button>Proceed to Checkout</Button>
    </div>
  );
}

export default Subtotal;

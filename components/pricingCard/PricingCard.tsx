import React from "react";
import "./style.scss";
import Button from "../button/Button";
type Props = {
  price: string;
  typePrice: string;
  isPopular: boolean;
};
function PricingCard({ price, typePrice, isPopular }: Props) {
  const ListPacks = ({ typePrice }: { typePrice: string }) => {
    if (typePrice === "Free") {
      return (
        <ul className="list-option-pack">
          <li className="items valid">Premium Icons</li>
          <li className="items">Quality Logo</li>
          <li className="items">Stock Images</li>
          <li className="items">Free Support</li>
        </ul>
      );
    } else if (typePrice === "Basic") {
      return (
        <ul className="list-option-pack">
          <li className="items valid">Premium Icons</li>
          <li className="items valid">Quality Logo</li>
          <li className="items">Stock Images</li>
          <li className="items">Free Support</li>
        </ul>
      );
    } else {
      return (
        <ul className="list-option-pack">
          <li className="items valid">Premium Icons</li>
          <li className="items valid">Quality Logo</li>
          <li className="items valid">Stock Images</li>
          <li className="items valid">Free Support</li>
        </ul>
      );
    }
  };
  return (
    <div className={isPopular ? "popular pricing__card" : "pricing__card"}>
      <div className="price">
        <p>{price}</p>
        <em>$</em>
      </div>
      <span className="type__price">{typePrice}</span>
      <ListPacks typePrice={typePrice} />
      <Button title="Commander" classStyle="btn-black btn-small" />
    </div>
  );
}

export default PricingCard;

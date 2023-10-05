import React from "react";
import "./Book.css";

const Book = ({
  productName,
  productImage,
  sellingPrice,
  originalAuthor,
  prodIntroduction,
  discountRate,
}) => {
  return (
    <div className="bookList">
      <img
        src={productImage}
        alt={productName}
        className="bookImg"
        width="300px"
      />
      <div>
        <div className="bookName">{productName}</div>
        <div className="bookOriginalAuthor">{originalAuthor}</div>
        <div className="bookOriginalAuthor">
          <div className="discountRate">{discountRate}</div>% {sellingPrice}
        </div>
        <div className="prodIntroduction">{prodIntroduction}</div>
      </div>
      <div className="buttonGroup">
        <button>장바구니</button>
        <button>바로구매</button>
      </div>
    </div>
  );
};

export default Book;

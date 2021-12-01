import React from "react";
import { memo } from "react";
const DisplayFruitName = ({ searchedFruitName }) => {
  console.log("re-renderizado :", searchedFruitName);
  return <h3>{searchedFruitName}</h3>;
};
export default memo(DisplayFruitName);

import React from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { DirectoryContainer } from "./DirectoryStyles";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map(({ id, title, imageUrl }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

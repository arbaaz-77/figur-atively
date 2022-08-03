import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./DirectoryItemStyles";

const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <DirectoryItemContainer>
      <BackgroundImage image={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

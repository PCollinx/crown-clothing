import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const onNavigatehandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigatehandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

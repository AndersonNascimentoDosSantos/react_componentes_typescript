import React from "react";
import PostCard from "../components/PostCard";

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <PostCard
        href={"#"}
        title={""}
        subtitle={""}
        date={""}
        imageSrc={
          "/images/blue_Grunge_halftone_detailed_texture_background.jpg"
        }
        authorName={""}
        cod={0}
      />
    </>
  );
};

export default Home;

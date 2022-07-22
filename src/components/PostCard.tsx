import React from "react";
import { Link } from "react-router-dom";
import { PostCardProps } from "../interface";
import { ReverseCategoryTag } from "./ReverseCategoryTag";

import { PostContainer, PostInfo } from "./styles";

const PostCard: React.FC<PostCardProps> = ({
  href,
  imageSrc,
  title,
  subtitle,
}) => {
  return (
    <PostContainer direction="column" height="150px" width="150px">
      <div>
        <picture>
          <Link to={href} rel="noopener noreferrer">
            <img src={imageSrc} alt={title} />
          </Link>
        </picture>
        <section>
          <PostInfo>
            {/* <span>{date ? formatDateNotHour(date) : ''}</span> */}
            <span>21 de abril de 2022</span>
          </PostInfo>
        </section>
      </div>
      <div>
        <Link to={href}>
          <a target="_blank" rel="noopener noreferrer">
            <h2>{title}</h2>
          </a>
        </Link>
        <p>{subtitle}</p>
        <div>
          {/* {!isScreenLessThan768 && (
            <ShareButtonFocus
              size={24}
              title={title}
              url={createUriLink(href)}
              stylesComponent={{ color: '#000' }}
              darkIcon
            />
          )} */}

          <Link to={href}>
            <a>
              <ReverseCategoryTag text="veja mais" isBold />
            </a>
          </Link>
        </div>
      </div>
    </PostContainer>
  );
};

export default PostCard;

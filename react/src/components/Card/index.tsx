import { BlogType } from "../../Layout";

type CardProps = {
  blog: BlogType;
};

export const Card = ({
  blog: { imgUrl, heading, tag, created, content },
}: CardProps) => {
  return (
    <div className="card">
      <img src={imgUrl} alt={heading} />
      <div className="stack content">
        <h2>{heading}</h2>
        <p>
          <span className="blue">{tag}</span> | <time>{created}</time>
        </p>
        <p>{content}</p>
      </div>
    </div>
  );
};

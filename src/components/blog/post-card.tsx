import * as React from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  title: string;
  slug: string;
  date: Date;
  featuredImage: any;
}

const PostCard: FunctionComponent<Props> = props => (
  <article className="post-card">
    {props.featuredImage ? (
      <Link to={props.slug}>
        <Img
          fluid={props.featuredImage.childImageSharp.fluid}
          alt={props.title + ' - Featured image'}
          className="featured-image"
        />
      </Link>
    ) : (
      ''
    )}
    <div className="post-content">
      <h2 className="title">
        <Link to={props.slug}>{props.title}</Link>
      </h2>
      <p className="meta">
        <time>{props.date}</time>
      </p>
    </div>
  </article>
);

export default PostCard;

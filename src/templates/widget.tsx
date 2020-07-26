import * as React from 'react';
import { FunctionComponent } from 'react';

interface Props {
  title: string;
  htmlContent: string;
}

const Widget: FunctionComponent<Props> = ({ title, htmlContent }) => {
  return (
    <div className="widget">
      <h1 className="title">{title}</h1>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default Widget;

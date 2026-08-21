export const Arrow = () => <span className="arrow">↗</span>;
export const Heading = ({ eyebrow, children }) => (
  <div className="heading">
    <small>{eyebrow}</small>
    <h2>{children}</h2>
  </div>
);

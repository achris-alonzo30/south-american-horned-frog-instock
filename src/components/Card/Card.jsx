import "./Card.scss";

export const Card = ({ 
  children, 
 }) => {
  return (
    <section className="card">
      {children}
    </section>
  );
};



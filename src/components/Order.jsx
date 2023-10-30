import PropTypes from "prop-types";

function Order({ closeHour, openHour }) {
  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div className="order">
      <p>
        {isOpen
          ? `We're open from ${openHour}:00 to ${closeHour}:00. Come visit us or order online.`
          : `We're currently closed. Please visit us during our opening hours.`}
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

Order.propTypes = {
  closeHour: PropTypes.number.isRequired,
  openHour: PropTypes.number.isRequired,
};

export default Order;

const MenuSvg = ({ openNavigation }) => {
  return (
    <svg
      className="overflow-visible"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "45" : "0"})`}
      />
      {!openNavigation && (
        <rect
          className="transition-all origin-center"
          y={openNavigation ? "5" : "7"}
          width="20"
          height="2"
          rx="1"
          fill="white"
        />
      )}
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "14"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;

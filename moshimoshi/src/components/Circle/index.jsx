const Circle = () => {
  return (
    <svg
      className="banner-circle"
      width={749}
      height={749}
      viewBox="0 0 749 749"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="374.214"
        cy="374.5"
        r="371.913"
        stroke="url(#paint0_linear_2_116)"
        strokeWidth={4}
      />
      <circle cx="375.646" cy="374.5" r="345.919" fill="#FFD318" />
      <defs>
        <linearGradient
          id="paint0_linear_2_116"
          x1="374.214"
          y1="0.586914"
          x2="374.214"
          y2="748.413"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7182EA" />
          <stop offset={1} stopColor="#BB53E0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Circle;

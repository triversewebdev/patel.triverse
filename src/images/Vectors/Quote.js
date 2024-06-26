import React from 'react'

const Quote = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      d="M-1216 0H64v800h-1280z"
      style={{
        fill: "none",
      }}
    />
    <path
      d="M36.806 51.968v-8.026c2.537-.14 4.458-.604 5.761-1.391 1.304-.786 2.22-2.063 2.749-3.829.528-1.766.793-4.293.793-7.581h-9.303V11.994h19.081v18.203c0 7.519-1.612 13.028-4.836 16.525-3.225 3.497-7.973 5.246-14.245 5.246ZM8 51.968v-8.026c2.537-.14 4.457-.586 5.761-1.338 1.304-.752 2.247-2.029 2.828-3.83.581-1.801.872-4.345.872-7.633H8V11.994h19.186v18.203c0 7.519-1.603 13.028-4.809 16.525C19.17 50.219 14.378 51.968 8 51.968Z"
      style={{
        fillRule: "nonzero",
      }}
    />
  </svg>
  )
}

export default Quote
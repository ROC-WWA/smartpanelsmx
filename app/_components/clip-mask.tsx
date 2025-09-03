import * as React from "react"
const ClipMask = ({src, className}: {src: string, className?: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1253 1080"
    className={className}
  >
    <defs>
      <clipPath id="a">
        <path
          d="M450.7 1080.2h802.2L981.6.2H179.5l271.2 1080z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
    </defs>
    <path
      d="M926.1 1080.2H-.1L313 .2h926.3l-313.2 1080z"
      style={{
        fill: "#94c143",
        opacity: 0.1,
      }}
    />
    <path
      d="M893.3 1080.2H91.2L362.4.2h802.2l-271.3 1080z"
      style={{
        fill: "#94c143",
      }}
    />
    <image
      xlinkHref={src}
      width={1600}
      height={1000}
      style={{
        clipPath: "url(#a)",
      }}
      transform="matrix(1.1 0 0 1.1 -152.1 -11)"
    />
  </svg>
)
export default ClipMask

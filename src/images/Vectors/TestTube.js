import React from 'react'

const TestTube = (props) => {
  return (
    <>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    viewBox="0 0 66 66"
    {...props}
  >
    <path d="M55.27 56.38h-3.9l-1.22-2.83C57.7 52 63.27 45.29 63.27 37.49c0-5.44-2.68-10.47-7.18-13.55a5.363 5.363 0 0 0-3.2-4.19l.95-3.46c.47-1.73-.54-3.52-2.27-3.99l-.62-.17.69-2.53 1.19.33c.18.05.37.07.55.07.91 0 1.74-.6 1.99-1.52l.58-2.12c.15-.53.08-1.09-.2-1.57s-.71-.82-1.25-.97L44.98 1.2c-1.09-.3-2.23.35-2.53 1.44l-.58 2.12c-.15.53-.08 1.09.2 1.57s.71.82 1.25.97l1.19.33-.69 2.53-.62-.17c-.84-.23-1.71-.12-2.47.31-.75.43-1.3 1.13-1.53 1.96l-5.24 19.07c-.44 1.61.42 3.27 1.94 3.87l.08 4.65c.01.39.27.73.64.83l4.91 1.35c.08.02.15.03.23.03.3 0 .58-.15.74-.41l2.44-3.94c.17.03.35.05.52.05 1.43 0 2.74-.95 3.13-2.39l1.47-5.36c.24.03.47.07.72.07.84 0 1.62-.21 2.33-.55 2.44 1.93 3.9 4.87 3.9 7.98 0 5.32-4.18 9.75-9.44 10.14l-.61-1.41a.884.884 0 0 0-.8-.53H35.03c-.35 0-.67.21-.8.53l-.63 1.46h-5.77c-1.72 0-3.13 1.4-3.13 3.13s1.4 3.12 3.13 3.12h3.07l-1.06 2.46h-3.9c-2.96 0-5.37 2.41-5.37 5.37V64c0 .48.39.88.88.88h38.33c.48 0 .88-.39.88-.88v-2.25c-.02-2.96-2.43-5.37-5.39-5.37zM43.58 5.46a.333.333 0 0 1-.03-.24l.58-2.12a.31.31 0 0 1 .3-.23c.03 0 .05 0 .08.01l9.53 2.62c.11.03.17.1.19.15.02.04.06.13.03.24l-.58 2.12c-.03.11-.1.17-.15.19-.04.02-.13.06-.24.03l-2.03-.56-5.45-1.5-2.03-.56c-.12-.03-.18-.1-.2-.15zm2.6 2.63 3.77 1.04-.69 2.53-3.77-1.04zm-4.82 32.06-3.65-1-.06-3.44 5.52 1.52zm5.55-5.27a1.5 1.5 0 0 1-1.84 1.05l-8.38-2.3c-.8-.22-1.27-1.04-1.05-1.84l5.24-19.07c.11-.39.36-.71.7-.91.35-.2.75-.25 1.14-.14l1.46.4h.01l5.45 1.5 1.46.4c.39.11.71.36.91.7.2.35.25.75.14 1.14l-.97 3.54c-.13-.01-.25-.04-.39-.04-2.96 0-5.37 2.41-5.37 5.37 0 2.1 1.22 3.9 2.98 4.78zm2.78-6.76-.01-.01h-.01c-1.45-.48-2.5-1.82-2.5-3.43 0-2 1.63-3.62 3.62-3.62.27 0 .53.03.78.09.01 0 .01.01.02.01h.02c1.61.37 2.81 1.81 2.81 3.52 0 1.27-.66 2.39-1.65 3.03 0 0-.01 0-.01.01-.57.37-1.24.58-1.96.58-.4.01-.76-.07-1.11-.18zm9.08 9.37c0-3.47-1.54-6.76-4.16-9.02.66-.67 1.13-1.51 1.37-2.44 3.49 2.78 5.54 6.96 5.54 11.46 0 7.09-5.15 13.17-12.08 14.42l-1.12-2.59c5.86-.74 10.45-5.8 10.45-11.83zM27.82 52.17c-.76 0-1.38-.62-1.38-1.37s.62-1.38 1.38-1.38h5.02l-1.19 2.75zm5.22 1.22 2.57-5.96h9.98l3.87 8.95H31.74zm25.85 9.74H22.31v-1.37c0-2 1.63-3.62 3.62-3.62h29.34c2 0 3.62 1.63 3.62 3.62z" />
    <path d="M50.79 23.69c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM21.36 45.36c5.54 0 10.04-4.5 10.04-10.04 0-5.3-8.97-16.9-9.35-17.39-.33-.43-1.05-.43-1.38 0-.1.13-.76.98-1.68 2.26v-9.06h.37c1.03 0 1.88-.84 1.88-1.88V6.23c0-1.03-.84-1.88-1.88-1.88H4.61c-1.03 0-1.88.84-1.88 1.88v3.02c0 1.03.84 1.88 1.88 1.88h.37v21.64c0 3.86 3.14 7.01 7.01 7.01.12 0 .25-.01.38-.02 1.64 3.31 5.05 5.6 8.99 5.6zM4.48 9.25V6.23c0-.07.06-.13.13-.13h14.75c.07 0 .13.06.13.13v3.02c0 .07-.06.13-.13.13H4.61c-.07 0-.13-.06-.13-.13zm16.88 10.66c2.83 3.78 8.29 11.83 8.29 15.41 0 4.57-3.72 8.29-8.29 8.29s-8.29-3.72-8.29-8.29c0-3.59 5.46-11.63 8.29-15.41zm-6.05 5.77H6.73V23.5h2.42c.48 0 .88-.39.88-.88s-.39-.88-.88-.88H6.73v-2.19h2.42c.48 0 .88-.39.88-.88s-.39-.88-.88-.88H6.73V15.6h2.42c.48 0 .88-.39.88-.88s-.39-.88-.88-.88H6.73v-2.75h10.51v11.56c-.63.97-1.28 1.98-1.93 3.03zm-8.58 7.09v-5.33h7.55c-1.65 2.9-2.96 5.85-2.96 7.88 0 .93.14 1.82.37 2.68-2.76-.16-4.96-2.44-4.96-5.23z" />
    <path d="M21.36 41.36c3.33 0 6.04-2.71 6.04-6.04 0-.48-.39-.88-.88-.88s-.88.39-.88.88c0 2.37-1.93 4.29-4.29 4.29-.48 0-.88.39-.88.88s.41.87.89.87z" />
  </svg>

    </>
  )
}

export default TestTube
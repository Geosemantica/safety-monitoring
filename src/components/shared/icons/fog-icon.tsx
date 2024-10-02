import { FC } from 'react';

interface IFogIconProps {}

const FogIcon: FC<IFogIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="inherit">
      <path
        d="M10.9174 5.46836C10.9174 5.17994 11.032 4.90333 11.2359 4.69938C11.4398 4.49544 11.7165 4.38086 12.0049 4.38086H21.7924C22.0808 4.38086 22.3574 4.49544 22.5614 4.69938C22.7653 4.90333 22.8799 5.17994 22.8799 5.46836C22.8799 5.75678 22.7653 6.03339 22.5614 6.23734C22.3574 6.44128 22.0808 6.55586 21.7924 6.55586H12.0049C11.7165 6.55586 11.4398 6.44128 11.2359 6.23734C11.032 6.03339 10.9174 5.75678 10.9174 5.46836ZM1.12988 9.81836C1.12988 9.52994 1.24446 9.25333 1.4484 9.04938C1.65235 8.84544 1.92896 8.73086 2.21738 8.73086H14.1799C14.4683 8.73086 14.7449 8.84544 14.9489 9.04938C15.1528 9.25333 15.2674 9.52994 15.2674 9.81836C15.2674 10.1068 15.1528 10.3834 14.9489 10.5873C14.7449 10.7913 14.4683 10.9059 14.1799 10.9059H2.21738C1.92896 10.9059 1.65235 10.7913 1.4484 10.5873C1.24446 10.3834 1.12988 10.1068 1.12988 9.81836ZM4.39238 13.0809C4.10396 13.0809 3.82735 13.1954 3.6234 13.3994C3.41946 13.6033 3.30488 13.8799 3.30488 14.1684C3.30488 14.4568 3.41946 14.7334 3.6234 14.9373C3.82735 15.1413 4.10396 15.2559 4.39238 15.2559H14.1799C14.4683 15.2559 14.7449 15.1413 14.9489 14.9373C15.1528 14.7334 15.2674 14.4568 15.2674 14.1684C15.2674 13.8799 15.1528 13.6033 14.9489 13.3994C14.7449 13.1954 14.4683 13.0809 14.1799 13.0809H4.39238ZM17.4424 13.0809C17.154 13.0809 16.8773 13.1954 16.6734 13.3994C16.4695 13.6033 16.3549 13.8799 16.3549 14.1684C16.3549 14.4568 16.4695 14.7334 16.6734 14.9373C16.8773 15.1413 17.154 15.2559 17.4424 15.2559H21.7924C22.0808 15.2559 22.3574 15.1413 22.5614 14.9373C22.7653 14.7334 22.8799 14.4568 22.8799 14.1684C22.8799 13.8799 22.7653 13.6033 22.5614 13.3994C22.3574 13.1954 22.0808 13.0809 21.7924 13.0809H17.4424ZM17.4424 8.73086C17.154 8.73086 16.8773 8.84544 16.6734 9.04938C16.4695 9.25333 16.3549 9.52994 16.3549 9.81836C16.3549 10.1068 16.4695 10.3834 16.6734 10.5873C16.8773 10.7913 17.154 10.9059 17.4424 10.9059H19.6174C19.9058 10.9059 20.1824 10.7913 20.3864 10.5873C20.5903 10.3834 20.7049 10.1068 20.7049 9.81836C20.7049 9.52994 20.5903 9.25333 20.3864 9.04938C20.1824 8.84544 19.9058 8.73086 19.6174 8.73086H17.4424ZM6.56738 18.5184C6.56738 18.2299 6.68196 17.9533 6.8859 17.7494C7.08985 17.5454 7.36646 17.4309 7.65488 17.4309H19.6174C19.9058 17.4309 20.1824 17.5454 20.3864 17.7494C20.5903 17.9533 20.7049 18.2299 20.7049 18.5184C20.7049 18.8068 20.5903 19.0834 20.3864 19.2873C20.1824 19.4913 19.9058 19.6059 19.6174 19.6059H7.65488C7.36646 19.6059 7.08985 19.4913 6.8859 19.2873C6.68196 19.0834 6.56738 18.8068 6.56738 18.5184ZM2.21738 17.4309C1.92896 17.4309 1.65235 17.5454 1.4484 17.7494C1.24446 17.9533 1.12988 18.2299 1.12988 18.5184C1.12988 18.8068 1.24446 19.0834 1.4484 19.2873C1.65235 19.4913 1.92896 19.6059 2.21738 19.6059H4.39238C4.68081 19.6059 4.95742 19.4913 5.16136 19.2873C5.36531 19.0834 5.47988 18.8068 5.47988 18.5184C5.47988 18.2299 5.36531 17.9533 5.16136 17.7494C4.95742 17.5454 4.68081 17.4309 4.39238 17.4309H2.21738ZM4.39238 4.38086C4.10396 4.38086 3.82735 4.49544 3.6234 4.69938C3.41946 4.90333 3.30488 5.17994 3.30488 5.46836C3.30488 5.75678 3.41946 6.03339 3.6234 6.23734C3.82735 6.44128 4.10396 6.55586 4.39238 6.55586H8.74238C9.03081 6.55586 9.30742 6.44128 9.51136 6.23734C9.71531 6.03339 9.82988 5.75678 9.82988 5.46836C9.82988 5.17994 9.71531 4.90333 9.51136 4.69938C9.30742 4.49544 9.03081 4.38086 8.74238 4.38086H4.39238Z"
        fill="inherit"
      />
    </svg>
  );
};

export default FogIcon;

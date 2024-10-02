import { css } from 'styled-components';

export const mediaBreakpoints = {
  // 720p (HD)
  xxs: {
    h: '1280px',
    v: '720px'
  },
  xs: {
    h: '1440px',
    v: '810px'
  },
  sm: {
    h: '1600px',
    v: '900px'
  },
  // 1080p (Full HD)
  md: {
    h: '1920px',
    v: '1080px'
  },
  lg: {
    h: '2240px',
    v: '1260px'
  },
  // 1440p (2K)
  xl: {
    h: '2560px',
    v: '1440px'
  },
  xxl: {
    h: '3200px',
    v: '1800px'
  },
  // 2160p (4K)
  xxxl: {
    h: '3840px',
    v: '2160px'
  },
  xxxxl: {
    h: '5760px',
    v: '3240px'
  },
  // 4320p (8K)
  xxxxxl: {
    h: '7680px',
    v: '4320px'
  }
};

const base = css`
  html {
    font-size: 10px;

    @media (min-width: ${mediaBreakpoints.xxs.h}) and (min-height: ${mediaBreakpoints.xxs.v}) {
      font-size: 10px;
    }

    @media (min-width: ${mediaBreakpoints.xs.h}) and (min-height: ${mediaBreakpoints.xs.v}) {
      font-size: 12px;
    }

    @media (min-width: ${mediaBreakpoints.sm.h}) and (min-height: ${mediaBreakpoints.sm.v}) {
      font-size: 13px;
    }

    @media (min-width: ${mediaBreakpoints.md.h}) and (min-height: ${mediaBreakpoints.md.v}) {
      font-size: 16px;
    }

    @media (min-width: ${mediaBreakpoints.lg.h}) and (min-height: ${mediaBreakpoints.lg.v}) {
      font-size: 18px;
    }

    @media (min-width: ${mediaBreakpoints.xl.h}) and (min-height: ${mediaBreakpoints.xl.v}) {
      font-size: 20px;
    }

    @media (min-width: ${mediaBreakpoints.xxl.h}) and (min-height: ${mediaBreakpoints.xxl.v}) {
      font-size: 24px;
    }

    @media (min-width: ${mediaBreakpoints.xxxl.h}) and (min-height: ${mediaBreakpoints.xxxl.v}) {
      font-size: 28px;
    }

    @media (min-width: ${mediaBreakpoints.xxxxl.h}) and (min-height: ${mediaBreakpoints.xxxxl.v}) {
      font-size: 42px;
    }

    @media (min-width: ${mediaBreakpoints.xxxxxl.h}) and (min-height: ${mediaBreakpoints.xxxxxl.v}) {
      font-size: 56px;
    }
  }

  * {
    font-family: var(--font-family-roboto);
  }

  code {
    font-family: monospace;
    color: var(--color-main-black);
    background-color: #f1f1f1;
    padding: 2px;
    font-size: 105%;
  }

  body {
    background: var(--color-main-background);
    color: var(--color-text-black);
  }
  // mapbox-gl styles override
  .mapboxgl-marker {
    z-index: var(--z-low);
  }

  .mapboxgl-marker:hover {
    z-index: var(--z-marker-hover) !important;
  }

  .mapboxgl-canvas-container.mapboxgl-interactive {
    cursor: default;
  }

  // toasts styles

  .progressBarNorm {
    background-color: 'green';
    color: 'green';
  }

  .progressBarWarning {
    background-color: 'yellow';
    color: 'yellow';
  }

  .progressBarStop {
    background-color: 'red';
    color: 'red';
  }

  .Toastify__toast-container {
    min-width: 28.75rem;
    position: absolute;
  }

  .Toastify__toast {
    margin-bottom: 0;
    padding-inline: var(--size-16);
    padding-block: var(--size-20);
    min-width: 28.75rem;
    min-height: 4rem;
    max-height: none;
    gap: var(--size-16);
    border-radius: var(--size-4);
  }

  .Toastify__toast-body {
    margin: 0;
    padding: 0;

    div {
      font-size: var(--size-16);
      font-style: normal;
      font-weight: var(--font-weight-regular);
      line-height: var(--size-18);
    }
  }

  .Toastify__toast-container {
    padding: 0;
    margin: 0;
  }

  .Toastify__toast-icon {
    -webkit-margin-end: var(--size-12);
    margin-inline-end: var(--size-12);
  }

  .Toastify__toast-theme--light {
    background: var(--bg-primary-white);
    color: var(--text-primary-black);
  }

  .react-tooltip {
    padding: 0 !important;
  }

  .import-layer-tooltip {
    background: var(--color-tooltip-background) !important;
    border-radius: var(--radius-4) !important;
    padding: var(--size-12) !important;
  }

  // tooltip pin rewrite
  .tooltip-arrow {
    --border: 0.313rem !important;

    margin-left: -0.375rem !important;
    width: 0 !important;
    height: 0 !important;
    border-top: var(--border) solid transparent !important;
    border-left: var(--border) solid transparent !important;
    border-right: var(--border) solid transparent !important;
    border-bottom: 0.5rem solid var(--color-tooltip-background) !important;
    transform: rotate(-90deg) !important;
    background: none !important;
  }

  .mapboxgl-ctrl-bottom-left {
    bottom: 2.375rem;
    right: 0.75rem;
    left: unset;
    width: fit-content;
  }

  .mapboxgl-ctrl-bottom-left .mapboxgl-ctrl {
    float: right;
    margin: 0;
  }

  .react-datepicker-wrapper {
    border-radius: var(--radius-4);
    width: 100%;
    max-height: var(--size-40);
    border: var(--size-1) solid var(--elements-tables-border);
    background-color: var(--bg-primary-white);
  }

  & .react-datepicker {
    border: none;
    border-radius: var(--radius-4);
  }

  // calendar container
  .react-datepicker-popper {
    z-index: var(--z-control-panel);
    box-shadow: var(--shadow-main-drop-form);
    border: var(--border-1) solid var(--elements-tables-border);
    border-radius: var(--radius-4);
  }
  // container popper top
  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle {
    fill: var(--elements-system-grey-25);
    color: var(--elements-system-grey-25);
    stroke: var(--elements-tables-border);
    stroke-width: 1.7;
  }
  // container popper bottom
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle {
    fill: var(--elements-system-white);
    color: var(--elements-system-white);
    stroke: var(--elements-tables-border);
    stroke-width: 0.5;
  }

  .react-datepicker__month-container {
    width: 13.25rem;
  }

  .react-datepicker__month {
    margin: 0;
    padding-inline: var(--size-10);
    padding-block: var(--size-10) var(--size-8);
  }

  .react-datepicker__header {
    background-color: var(--elements-system-grey-25);
    padding-block: var(--size-8) 0;
    padding-inline: var(--size-8);
    border-bottom: var(--border-1) solid var(--elements-tables-border);
    min-height: 3.75rem;
    border-top-left-radius: 4px;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 4px;
  }

  .react-datepicker__current-month {
    box-sizing: border-box;
    font-size: var(--font-size-text-small);
    font-style: normal;
    font-weight: var(--font-weight-bold);
    line-height: var(--font-size-text-main);
    margin-top: var(--size-6);
    margin-bottom: var(--size-6);
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
    gap: var(--size-4);
    margin-bottom: var(--size-4);

    &:last-child {
      margin-bottom: 0;
    }
  }

  .react-datepicker__day-name {
    width: var(--size-24);
    height: var(--size-24);
    margin: 0 var(--size-4) 0 0;
    padding: var(--size-4);
    font-size: var(--font-size-text-xsmall);
    font-style: normal;
    font-weight: var(--font-weight-regular);
    line-height: var(--size-14);

    &:last-child {
      margin: 0;
    }
  }

  .react-datepicker__day {
    margin: 0;
    padding-block: var(--size-4);
    width: var(--size-24);
    height: var(--size-24);
    font-size: var(--size-12);
    font-style: normal;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: var(--font-weight-regular);
    line-height: var(--size-14);
    border-radius: var(--radius-4);
    color: var(--elements-system-black);

    &:hover {
      background-color: var(--bg-secondary-hover);
      opacity: 1;
    }
  }

  .react-datepicker__day--today {
    font-weight: var(--font-weight-bold);
    background-color: var(--elements-system-white);
    color: var(--elements-system-black);

    &:focus {
      outline: none;
      border-radius: var(--radius-4);
    }

    &:hover {
      background-color: var(--bg-secondary-hover);
      font-weight: var(--font-weight-bold);
      opacity: 1;
    }
  }

  .react-datepicker__day--selected {
    color: var(--text-primary-white);
    background-color: var(--bg-primary-active);

    &:hover {
      color: var(--text-primary-white);
      border-radius: var(--border-4);
      background-color: var(--bg-primary-active);
    }
  }

  .react-datepicker__day--disabled {
    color: var(--text-primary-disabled);
    cursor: default;

    &:hover {
      font-weight: 400;
      background-color: var(--bg-primary-white);
    }
  }

  .mapbox-gl-draw_trash {
    display: none !important;
  }
`;

export default base;

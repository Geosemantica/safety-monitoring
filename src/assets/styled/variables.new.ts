import { css } from 'styled-components';

const variablesNEW = css`
  :root {
    // FONT
    --font-family-roboto: 'Roboto', sans-serif;

    --font-size-h1: 2.25rem; // 36px
    --font-size-h2: 2rem; // 32px
    --font-size-h3: 1.75rem; // 28px
    --font-size-h4: 1.25rem; // 20px

    --font-size-text-big: 1.125rem; // 18px
    --font-size-text-main: 1rem; // 16px
    --font-size-text-small: 0.875rem; // 14px
    --font-size-text-xsmall: 0.75rem; // 12px
    --font-size-text-xxsmall: 0.625rem; // 10px
    --font-size-text-tiny: 0.5rem; // 8px

    --font-weight-black: 900;
    --font-weight-bold: 700;
    --font-weight-medium: 500;
    --font-weight-regular: 400;

    // COLORS
    --bg-primary-white: rgba(255, 255, 255, 1);
    --bg-primary-active: rgba(54, 93, 192, 1);
    --bg-primary-hover: rgba(30, 70, 171, 1);
    --bg-primary-disabled: rgba(195, 209, 245, 1);

    --bg-secondary-active: rgba(251, 251, 251, 1);
    --bg-secondary-hover: rgba(231, 237, 251, 1);
    --bg-secondary-disabled: rgba(255, 255, 255, 1);
    --bg-secondary-border: rgba(43, 92, 219, 1);

    --bg-error: rgba(213, 0, 0, 1);
    --bg-error-active: rgba(255, 82, 82, 1);
    --bg-error-hover: rgba(255, 45, 45, 1);
    --bg-error-disabled: rgba(255, 197, 197, 1);

    --elements-system-white: rgba(255, 255, 255, 1);
    --elements-system-grey-25: rgba(244, 244, 244, 1);
    --elements-system-grey-50: rgba(232, 232, 232, 1);
    --elements-system-grey-100: rgba(210, 210, 210, 1);
    --elements-system-grey-200: rgba(187, 187, 187, 1);
    --elements-system-grey-300: rgba(165, 165, 165, 1);
    --elements-system-grey-400: rgba(142, 142, 142, 1);
    --elements-system-grey-500: rgba(120, 120, 120, 1);
    --elements-system-grey-600: rgba(97, 97, 97, 1);
    --elements-system-grey-700: rgba(75, 75, 75, 1);
    --elements-system-grey-800: rgba(52, 52, 52, 1);
    --elements-system-grey-900: rgba(30, 30, 30, 1);
    --elements-system-black: rgba(7, 7, 7, 1);

    --elements-tables-border: rgba(0, 65, 102, 0.1);
    --elements-tables-hat: rgba(236, 237, 240, 1);
    --elements-tables-body: rgba(250, 250, 250, 1);

    --elements-tooltip-bg: rgba(36, 38, 39, 0.9);

    --elements-avatar-default: rgba(112, 120, 139, 1);

    --elements-down-panel-default: rgba(127, 129, 133, 1);
    --elements-down-panel-hover: rgba(110, 111, 115, 1);
    --elements-down-panel-active: rgba(93, 94, 97, 1);

    // old color variables
    --color-neutral-white: #ffffff;
    --color-neutral-grey: #b5b7bd;
    --color-neutral-black: #000;
    --color-ground-light-brown: #b67874;
    --color-main-black: #242627;
    --color-main-white: #fefefe;
    --color-main-background: #f0f0f1;
    --color-text-black: #070707;
    --color-text-for-yellow: #2d2600;
    --color-table-hat: #6e7585;
    --color-status-normal: #81c532;
    --color-status-attention: #ffd600;
    --color-status-stop: #ed0000;
    --color-indicator-info: #0019ff;
    --color-indicator-warn: #faad14;
    --color-modal-background: rgba(0, 0, 0, 0.25);

    //FIXME: temporary names
    --elements-ground-light-brown: rgba(230, 194, 118, 1); //  --soil-type-first
    --elements-ground-brown: rgba(182, 120, 71, 1); // --soil-type-second
    --elements-ground-dark-brown: rgba(138, 63, 31, 1); // --soil-type-third
    --elements-ground-light-grey: rgba(158, 158, 158, 1); // --soil-type-fourth
    --elements-ground-dark-grey: rgba(94, 94, 94, 1); // --soil-type-fifth

    --indication-status-norm: rgba(165, 214, 167, 1);
    --indication-status-warning: rgba(255, 224, 130, 1);
    --indication-status-alert: rgba(255, 82, 82, 1);
    --indication-status-info: rgba(69, 85, 255, 1);
    --indication-status-np-data: rgba(142, 142, 142, 1);

    --indication-signal-norm: rgba(56, 142, 60, 1);
    --indication-signal-warning: rgba(255, 196, 0, 1);
    --indication-signal-alert: rgba(213, 0, 0, 1);
    --indication-signal-info: rgba(69, 85, 255, 1);

    --indication-pda-norm: rgba(56, 142, 60, 0.5);
    --indication-pda-warn: rgba(255, 196, 0, 0.5);
    --indication-pda-stop: rgba(255, 82, 82, 0.5);

    --signal-circle-stop: rgba(255, 82, 82, 0.15);
    --signal-circle-attantion: rgba(255, 196, 0, 0.15);
    --signal-circle-service: rgba(69, 85, 255, 0.15);

    --text-primary-black: rgba(7, 7, 7, 1);
    --text-primary-white: rgba(249, 249, 249, 1);
    --text-primary-secondary: rgba(7, 7, 7, 0.6);
    --text-primary-link: rgba(28, 66, 163, 1);
    --text-primary-error: rgba(213, 0, 0, 1);
    --text-primary-disabled: rgba(7, 7, 7, 0.6);

    --text-brand-active: rgba(54, 93, 192, 1);
    --text-brand-hover: rgba(30, 70, 171, 1);
    --text-brand-disabled: rgba(195, 209, 245, 1);

    --text-status-norm: rgba(56, 142, 60, 1);
    --text-status-warning: rgba(226, 183, 40, 1);
    --text-status-alert: rgba(213, 0, 0, 1);
    --text-status-no-data: rgba(70, 70, 70, 1);

    --button-primary-outline: rgba(54, 93, 192, 0.2);
    --button-error-outline: rgba(255, 82, 82, 0.2);
    --button-ghost-outline: rgba(204, 204, 204, 0.2);
    --input-text-disabled: rgba(7, 7, 7, 0.25);
    --input-text-placeholder: rgba(7, 7, 7, 0.6);
    --input-close-button-hovered: rgba(7, 7, 7, 0.6);

    --blur-gray: linear-gradient(to right, rgba(212, 214, 219, 1), rgba(212, 214, 219, 0));
    --blur-white: linear-gradient(to right, rgba(250, 250, 250, 1), rgba(250, 250, 250, 0));

    --stop-linear: linear-gradient(270deg, rgba(255, 82, 82, 0.3) 0%, rgba(244, 244, 244, 0) 100%);
    --attention-linear: linear-gradient(270deg, rgba(255, 224, 130, 0.3) 0%, rgba(244, 244, 244, 0) 100%);
    --service-linear: linear-gradient(270deg, rgba(69, 85, 255, 0.3) 0%, rgba(244, 244, 244, 0) 100%);

    --color-tooltip-background: rgba(36, 38, 39, 0.9);

    // LAYERS COLORS
    --color-profile-line: #f2b250;
    --color-profile-line-halo: #644009;
    --color-pump-layer: #ffffff;
    --color-pump-layer-halo: #365dc0;
    --color-pump-line: #b2c0e4;
    --color-logistic: #c8e3f4;
    --color-mine-allotment: #c10000;
    --color-land-allotment-low-zoom: rgba(239, 216, 174, 0.8);
    --color-land-allotment-high-zoom: rgba(255, 255, 255, 0.06);
    --color-wastewater: #a1c7ff;
    --color-wastewater-halo: #4d4d4d;
    --color-external-low-zoom: #f4f99a;
    --color-external-label: #5b4520;
    --color-external-high-zoom: rgba(244, 249, 154, 0);
    --color-fuel: #bbbbb9;
    --color-heap-border-low-zoom: rgba(254, 254, 254, 0.8);
    --color-heap-border-high-zoom: rgba(254, 254, 254, 0.4);
    --color-leaseholds-border-low-zoom: rgba(193, 0, 0, 1);
    --color-leaseholds-border-high-zoom: rgba(194, 0, 0, 0.4);
    --color-factor-area: rgba(69, 85, 255, 0.3);
    --color-radar-area-admin-mode: rgba(255, 255, 255, 0.3);
    --color-report-area: rgba(69, 85, 255, 0.5);
    --color-explosion-area: rgba(255, 0, 0, 0.05);
    --color-explosion-area-active: rgba(255, 0, 0, 0.2);
    --color-explosion-line: rgba(255, 0, 0, 1);
    --color-mining-text: rgba(194, 147, 255, 1);
    --color-mining-area: rgba(194, 147, 255, 0.3);
    --color-disabled-area: rgba(0, 0, 0, 0);
    --color-text-stroke: rgba(78, 78, 79, 1);

    // CONCENTRIC CIRCLES COLORS
    --color-concentric-circle-stop-low: rgba(213, 0, 0, 0);
    --color-concentric-circle-stop-high: rgba(213, 0, 0, 1);
    --color-concentric-circle-attention-low: rgba(255, 196, 0, 0);
    --color-concentric-circle-attention-high: rgba(255, 196, 0, 1);
    --color-concentric-circle-info-low: rgba(69, 85, 255, 0);
    --color-concentric-circle-info-high: rgba(69, 85, 255, 1);

    // SHADOW
    --shadow-main-big: 0rem 0.25rem 2rem 0rem rgba(0, 16, 61, 0.16);
    --shadow-main-medium: 0rem 0rem 0.938rem 0rem rgba(0, 0, 0, 0.25);
    --shadow-main-small: 0rem 0rem 0.313rem 0rem rgba(0, 0, 0, 0.25);
    --shadow-main-drop-form: 0rem 0.125rem 0.313rem 0rem rgba(0, 0, 0, 0.12);

    --shadow-map-small: 0rem 0rem 0.25rem 0rem rgba(0, 0, 0, 0.25);
    --shadow-map-big: 0rem 0rem 1.25rem 0rem rgba(0, 0, 0, 0.5);
    --shadow-map-pin-small: 0rem 0rem 0.375rem 0rem rgba(0, 0, 0, 0.25);

    --down-panel-item-active-shadow: 0px 0px 0.938rem 0px rgba(0, 0, 0, 0.25);

    --shadow-button-hover: 62.438rem 62.438rem 0rem 0rem rgba(0, 0, 0, 0.05) inset;

    /* Shadows old variables */
    --shadow-small: 0px 0px 0.3125rem rgba(0, 0, 0, 0.25);
    --shadow-big: 0px 0px 0.9375rem rgba(0, 0, 0, 0.25);
    --shadow-marker-default: 0px -2px 4px 0px rgba(0, 0, 0, 0.25);
    --shadow-marker-triangle: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
    --shadow-marker: -2px -3px 4px -2px rgba(0, 0, 0, 0.25);
    --shadow-marker-active: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
    --shadow-marker-triangle-active: -5px 0px 30px 0px rgba(0, 0, 0, 1);

    // MARKER SHADOWS
    --shadow-marker-default: 0px -2px 4px 0px rgba(0, 0, 0, 0.25);
    --shadow-marker-triangle: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
    --shadow-marker: -2px -3px 4px -2px rgba(0, 0, 0, 0.25);
    --shadow-marker-active: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
    --shadow-marker-triangle-active: -5px 0px 30px 0px rgba(0, 0, 0, 1);

    // SIZE
    --size-1: 0.063rem;
    --size-2: 0.125rem;
    --size-4: 0.25rem;
    --size-6: 0.375rem;
    --size-8: 0.5rem;
    --size-10: 0.625rem;
    --size-12: 0.75rem;
    --size-14: 0.875rem;
    --size-16: 1rem;
    --size-18: 1.125rem;
    --size-20: 1.25rem;
    --size-22: 1.375rem;
    --size-24: 1.5rem;
    --size-26: 1.625rem;
    --size-28: 1.75rem;
    --size-30: 1.875rem;
    --size-32: 2rem;
    --size-34: 2.125rem;
    --size-36: 2.25rem;
    --size-38: 2.375rem;
    --size-40: 2.5rem;
    --size-42: 2.625rem;
    --size-44: 2.75rem;
    --size-46: 2.875rem;
    --size-48: 3rem;
    --size-50: 3.125rem;
    --size-52: 3.25rem;
    --size-54: 3.375rem;
    --size-56: 3.5rem;
    --size-58: 3.625rem;
    --size-60: 3.75rem;
    --size-100: 6.25rem;

    // GAP
    --gap-1: var(--size-1);
    --gap-2: var(--size-2);
    --gap-4: var(--size-4);
    --gap-6: var(--size-6);
    --gap-8: var(--size-8);
    --gap-10: var(--size-10);
    --gap-12: var(--size-12);
    --gap-14: var(--size-14);
    --gap-16: var(--size-16);
    --gap-18: var(--size-18);
    --gap-20: var(--size-20);
    --gap-22: var(--size-22);
    --gap-24: var(--size-24);
    --gap-26: var(--size-26);
    --gap-28: var(--size-28);
    --gap-30: var(--size-30);
    --gap-32: var(--size-32);
    --gap-34: var(--size-34);
    --gap-36: var(--size-36);
    --gap-38: var(--size-38);
    --gap-40: var(--size-40);
    --gap-42: var(--size-42);
    --gap-44: var(--size-44);
    --gap-46: var(--size-46);
    --gap-48: var(--size-48);

    // BORDER
    --border-1: var(--size-1);
    --border-2: var(--size-2);
    --border-4: var(--size-4);

    // RADIUS
    --radius-2: var(--size-2);
    --radius-4: var(--size-4);
    --radius-8: var(--size-8);
    --radius-30: var(--size-30);
    --radius-100px: 6.25rem;
    --radius-100: 100%;

    --border-radius-md: 0.5rem; // 8px

    // Z-INDEX
    --z-low: 1;
    --z-middle: 10;
    --z-signal-low: 20;
    --z-signal-middle: 21;
    --z-signal-high: 22;
    --z-high: 100;
    --z-highest: 1000;
    --z-marker-hover: 9999;
    --z-active-marker: 10000;
    --z-toggle: 10001;
    --z-control-panel: 11000;
    --z-user-menu: 1999999999;
    --z-user-avatar: 2000000000;
    --z-modal: 21000;
    --z-tooltip: 10001;

    --point-indicator-height: var(--size-52);
    --map-control-size: var(--size-40);
    --marker-stick-pointer-height: 1.7rem;
  }
`;

export default variablesNEW;

import { css } from 'styled-components';

const duration = '2.5s';

const animations = css`
  .indicator_alert_static_in {
    fill: var(--color-main-white);
  }
  .indicator_alert_static_out {
    fill: var(--color-status-stop);
  }
  .indicator_alert_static_stroke {
    stroke: var(--color-status-stop);
  }

  .indicator_warn_static_in {
    fill: var(--color-main-white);
  }
  .indicator_warn_static_out {
    fill: var(--color-indicator-warn);
  }
  .indicator_warn_static_stroke {
    stroke: var(--color-indicator-warn);
  }

  .service_alert_static_in {
    fill: var(--color-indicator-info);
  }
  .service_alert_static_out {
    fill: var(--color-main-white);
  }
  .service_alert_static_stroke {
    stroke: var(--color-main-white);
  }

  .pit_animation_warn.pit_animation_warn {
    animation-duration: ${duration};
    animation-name: pit_warn;
    animation-iteration-count: infinite;
  }

  .pit_animation_stop.pit_animation_stop {
    animation-duration: ${duration};
    animation-name: pit_stop;
    animation-iteration-count: infinite;
  }

  .pit_animation_svc.pit_animation_svc {
    animation-duration: ${duration};
    animation-name: pit_svc;
    animation-iteration-count: infinite;
  }

  .indicator_alert_animation_in.indicator_alert_animation_in {
    animation-duration: ${duration};
    animation-name: indicator_alert_in;
    animation-iteration-count: infinite;
  }

  .indicator_alert_animation_out.indicator_alert_animation_out {
    animation-duration: ${duration};
    animation-name: indicator_alert_out;
    animation-iteration-count: infinite;
  }

  .indicator_warn_animation_in.indicator_warn_animation_in {
    animation-duration: ${duration};
    animation-name: indicator_warn_in;
    animation-iteration-count: infinite;
  }

  .indicator_warn_animation_out.indicator_warn_animation_out {
    animation-duration: ${duration};
    animation-name: indicator_warn_out;
    animation-iteration-count: infinite;
  }

  .service_alert_animation_in.service_alert_animation_in {
    animation-duration: ${duration};
    animation-name: service_alert_in;
    animation-iteration-count: infinite;
  }

  .service_alert_animation_out.service_alert_animation_out {
    animation-duration: ${duration};
    animation-name: service_alert_out;
    animation-iteration-count: infinite;
  }

  .service_alert_animation_stroke.service_alert_animation_stroke {
    animation-duration: ${duration};
    animation-name: service_alert_stroke;
    animation-iteration-count: infinite;
  }

  @keyframes pit_warn {
    0% {
      background-color: var(--color-table-hat);
    }

    50% {
      background-color: var(--color-status-attention);
    }

    100% {
      background-color: var(--color-table-hat);
    }
  }

  @keyframes pit_stop {
    0% {
      background-color: var(--color-table-hat);
    }

    50% {
      background-color: var(--color-status-stop);
    }

    100% {
      background-color: var(--color-table-hat);
    }
  }

  @keyframes pit_svc {
    0% {
      background-color: var(--color-table-hat);
    }

    50% {
      background-color: var(--color-indicator-info);
    }

    100% {
      background-color: var(--color-table-hat);
    }
  }

  @keyframes indicator_alert_in {
    0% {
      fill: var(--color-main-white);
    }

    50% {
      fill: var(--color-status-stop);
    }

    100% {
      fill: var(--color-main-white);
    }
  }

  @keyframes indicator_alert_out {
    0% {
      fill: var(--color-status-stop);
    }

    50% {
      fill: var(--color-main-white);
    }

    100% {
      fill: var(--color-status-stop);
    }
  }

  @keyframes indicator_warn_in {
    0% {
      fill: var(--color-main-white);
    }

    50% {
      fill: var(--color-indicator-warn);
    }

    100% {
      fill: var(--color-main-white);
    }
  }

  @keyframes indicator_warn_out {
    0% {
      fill: var(--color-indicator-warn);
    }

    50% {
      fill: var(--color-main-white);
    }

    100% {
      fill: var(--color-indicator-warn);
    }
  }

  @keyframes service_alert_in {
    0% {
      fill: var(--color-indicator-info);
    }

    50% {
      fill: var(--color-main-white);
    }

    100% {
      fill: var(--color-indicator-info);
    }
  }

  @keyframes service_alert_out {
    0% {
      fill: var(--color-main-white);
    }

    50% {
      fill: var(--color-indicator-info);
    }

    100% {
      fill: var(--color-main-white);
    }
  }

  @keyframes service_alert_stroke {
    0% {
      stroke: var(--color-indicator-info);
    }

    50% {
      stroke: var(--color-main-white);
    }

    100% {
      stroke: var(--color-indicator-info);
    }
  }

  .map_concentric_circle_inner_animation.map_concentric_circle_inner_animation {
    animation-duration: ${duration};
    animation-name: concentric_circle_inner;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  .map_concentric_circle_outer_animation.map_concentric_circle_outer_animation {
    animation-duration: ${duration};
    animation-name: concentric_circle_outer;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes concentric_circle_inner {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    75% {
      transform: scale(1);
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes concentric_circle_outer {
    0% {
      transform: scale(1);
      opacity: 0;
    }

    50% {
      transform: scale(1);
      opacity: 0;
    }

    75% {
      transform: scale(1);
      opacity: 1;
    }

    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .loader_animation.loader_animation {
    animation: rotation 2s infinite linear;
  }

  @keyframes slide-top {
    0% {
      transform: translateY(10rem);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slide-bottom {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(10rem);
    }
  }
  // toast
  .slide-top {
    animation: slide-top 300ms ease-in 200ms both;
  }

  .slide-bottom {
    animation: slide-bottom 300ms ease-out 300ms both;
  }
`;

export default animations;

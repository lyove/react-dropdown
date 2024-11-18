import React from 'react';

/**
 * Default trigger renderer - Displays a plain button
 * with label
 *
 * @param {Object} props - React props
 * @param {Boolean} props.disabled - Trigger disabled
 * @param {String|ReactElement} props.label - Trigger display label
 */
export function TriggerRenderer(props) {
  return (
    <button className={`${props.containerClass}trigger-renderer`} disabled={props.disabled}>
      {props.label}
    </button>
  );
}

/**
 * Default trigger component - Renders a div with
 * all the handlers
 *
 * @param {Object} props - React props
 * @param {ReactElement} [props.renderer] - Custom trigger renderer
 * @param {ReactRef} props.triggerRef - React ref for trigger
 * @param {Function} props.onClick - Click handler
 * @param {Function} props.onKeyDown - Key down handler
 * @param {Boolean} props.disabled - Trigger disabled
 * @param {String|ReactElement} props.label - Trigger display label
 */
export default function Trigger(props) {
  const Renderer = props.renderer || TriggerRenderer;

  return (
    <div
      className={`${props.containerClass}-trigger-inner`}
      ref={props.triggerRef}
      role="button"
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
    >
      <Renderer
        label={props.label}
        containerClass={props.containerClass}
        disabled={props.disabled}
      />
    </div>
  );
}

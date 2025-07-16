export function stopPropagation(event: Event): void {
  event.stopPropagation();
}

export function preventDefault(
  event: TouchEvent | Event,
  isStopPropagation?: boolean,
): void {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event as Event);
  }
}

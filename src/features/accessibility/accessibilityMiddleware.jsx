// features/accessibility/accessibilityMiddleware.js
export const accessibilityMiddleware = (store) => (next) => (action) => {
  if (action.type === "accessibility/toggleSpecialMode") {
    const state = store.getState().accessibility;

    if (state.isSpecialMode) {
      try {
        window.uhpv?.destroy();
      } catch (e) {
        console.error("Ошибка деинициализации:", e);
      }
    }
  }
  return next(action);
};

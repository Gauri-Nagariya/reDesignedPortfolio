export const cursorEvents = {
  enter: ({ text = "", bg = "#f28f36", color = "#000", size = 70 } = {}) => {
    window.dispatchEvent(
      new CustomEvent("cursor-enter", { detail: { text, bg, color, size } })
    );
  },
  leave: ({ bg, color } = {}) => {
    window.dispatchEvent(
      new CustomEvent("cursor-leave", { detail: { bg, color } })
    );
  },
};

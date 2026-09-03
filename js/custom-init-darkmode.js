(function () {
  try {
    const root = document.documentElement;
    const classes = ["preload"];

    // Default to dark mode if not set in localStorage
    if (localStorage.getItem("darkMode") === null) {
      const isSystemInDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      localStorage.setItem("darkMode", isSystemInDark ? "enabled" : "disabled");
    }

    if (localStorage.getItem("darkMode") === "enabled") {
      classes.push("dark-mode");
      root.style.setProperty("--bg-color", "#141413"); // Dark mode
      root.style.setProperty("--text-color", "#f9ead0");
    } else {
      root.style.setProperty("--bg-color", "#f9ead0");
      root.style.setProperty("--text-color", "#141413");
    }
    root.classList.add(...classes);

    queueMicrotask(() => {
      root.classList.add("js-loaded");
    });
  } catch (e) {
    document.documentElement.classList.add("preload", "js-loaded");
  }
})();

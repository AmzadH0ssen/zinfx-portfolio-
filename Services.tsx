@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Manrope:wght@200;400;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-heading: "Manrope", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

@utility glass {
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

/* Custom scrollbars for a premium dark feel */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0F0F0F;
}

::-webkit-scrollbar-thumb {
  background: #27272a;
  border-radius: 5px;
  border: 2px solid #0F0F0F;
}

::-webkit-scrollbar-thumb:hover {
  background: #337418;
}


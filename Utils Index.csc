@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom animations */
@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

.animate-float {
  animation: float 15s ease-in-out infinite;
}

@layer base {
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  body {
    @apply text-gray-800 font-sans;
  }

  .reveal-on-scroll {
    opacity: 0;
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    transform: translateY(20px);
  }

  .reveal-on-scroll.animate-fadeIn {
    opacity: 1;
    transform: translateY(0);
  }
}

export function initContentProtection() {
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, PrintScreen, Ctrl+P
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.shiftKey && e.key === 'C') ||
      (e.ctrlKey && e.shiftKey && e.key === 'J') ||
      (e.ctrlKey && e.key === 'u') ||
      (e.ctrlKey && e.key === 'U') ||
      (e.ctrlKey && e.key === 's') ||
      (e.ctrlKey && e.key === 'S') ||
      (e.ctrlKey && e.key === 'a') ||
      (e.ctrlKey && e.key === 'A') ||
      (e.ctrlKey && e.key === 'c') ||
      (e.ctrlKey && e.key === 'C') ||
      (e.ctrlKey && e.key === 'v') ||
      (e.ctrlKey && e.key === 'V') ||
      (e.ctrlKey && e.key === 'x') ||
      (e.ctrlKey && e.key === 'X') ||
      (e.ctrlKey && e.key === 'p') ||
      (e.ctrlKey && e.key === 'P') ||
      e.key === 'PrintScreen' ||
      e.key === 'F1' ||
      e.key === 'F3' ||
      e.key === 'F5' ||
      (e.ctrlKey && e.key === 'r') ||
      (e.ctrlKey && e.key === 'R')
    ) {
      e.preventDefault();
      return false;
    }
  });

  // Disable text selection
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable drag and drop
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable print screen attempts
  document.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
      navigator.clipboard.writeText('');
    }
  });

  // Clear clipboard on focus
  window.addEventListener('focus', () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('');
    }
  });

  // Disable copying images
  document.addEventListener('copy', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable image saving
  document.addEventListener('mousedown', (e) => {
    if (e.target instanceof HTMLImageElement) {
      e.preventDefault();
      return false;
    }
  });

  // Console warning
  console.clear();
  console.log('%c⚠️ Content Protection Enabled', 'color: red; font-size: 20px; font-weight: bold;');
  console.log('%cThis website content is protected. Unauthorized copying is prohibited.', 'color: red; font-size: 14px;');
  
  // Disable console
  const devtools = {
    open: false,
    orientation: null
  };
  
  setInterval(() => {
    if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
      if (!devtools.open) {
        devtools.open = true;
        console.clear();
        console.log('%c⚠️ Developer tools detected!', 'color: red; font-size: 20px; font-weight: bold;');
      }
    } else {
      devtools.open = false;
    }
  }, 500);
}

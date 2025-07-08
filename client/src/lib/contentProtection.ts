export function initContentProtection() {
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, PrintScreen
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.key === 'u') ||
      (e.ctrlKey && e.key === 's') ||
      (e.ctrlKey && e.key === 'a') ||
      (e.ctrlKey && e.key === 'c') ||
      (e.ctrlKey && e.key === 'v') ||
      (e.ctrlKey && e.key === 'x') ||
      e.key === 'PrintScreen'
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
}

export const scrollToSection = (hash: string) => {
  if (!hash) return;
  
  // Remove the # character
  const elementId = hash.replace('#', '');
  
  // Wait for the component to mount
  setTimeout(() => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 80; // Height of the fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
};

export const handleNavigationWithHash = (path: string) => {
  if (path.includes('#')) {
    const [basePath, hash] = path.split('#');
    
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      window.location.href = path;
    } else {
      // If we're already on the home page, just scroll to the section
      scrollToSection('#' + hash);
    }
  }
};

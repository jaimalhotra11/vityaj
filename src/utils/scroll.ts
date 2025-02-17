type ScrollOptions = {
  behavior?: ScrollBehavior;
};

// Enhanced scroll utilities
export const scrollToTop = (options: ScrollOptions = { behavior: 'smooth' }) => {
  window.scrollTo({
    top: 0,
    ...options
  });
};

export const scrollToBottom = (options: ScrollOptions = { behavior: 'smooth' }) => {
  window.scrollTo({
    top: document.body.scrollHeight,
    ...options
  });
};

const isCenterClick = (event: MouseEvent): boolean => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  // Define center area as middle 1/3 of the screen
  const centerXStart = windowWidth / 3;
  const centerXEnd = (windowWidth / 3) * 2;
  const centerYStart = windowHeight / 3;
  const centerYEnd = (windowHeight / 3) * 2;
  
  return (
    event.clientX > centerXStart &&
    event.clientX < centerXEnd &&
    event.clientY > centerYStart &&
    event.clientY < centerYEnd
  );
};

export const setupScrollHandlers = () => {
  const handleClick = (event: MouseEvent) => {
    // Only scroll if click is in center area
    if (isCenterClick(event)) {
      scrollToBottom();
    }
  };

  document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
  };
};

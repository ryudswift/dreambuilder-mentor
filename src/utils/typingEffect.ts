
export const typeText = (
  text: string,
  elementId: string,
  speed: number = 30,
  startDelay: number = 200
): Promise<void> => {
  return new Promise((resolve) => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID ${elementId} not found`);
      resolve();
      return;
    }
    
    element.textContent = '';
    
    setTimeout(() => {
      let i = 0;
      const typing = setInterval(() => {
        element.textContent += text[i];
        i++;
        
        if (i >= text.length) {
          clearInterval(typing);
          resolve();
        }
      }, speed);
    }, startDelay);
  });
};

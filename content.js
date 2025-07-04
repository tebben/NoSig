console.log("NoSig extension loaded (v4)");

// This selector finds any element whose ID contains "Signature", case-insensitively.
const signatureSelector = '[id*="Signature" i]';

const removeSignatures = () => {
  const signatureElements = document.querySelectorAll(signatureSelector);

  if (signatureElements.length > 0) {
    signatureElements.forEach((el) => {
      el.remove();
    });
    return true;
  }
  return false;
};

const startPollingForSignatures = () => {
  let attempts = 0;
  const maxAttempts = 20; // Poll for 10 seconds (20 * 500ms)
  const intervalId = setInterval(() => {
    attempts++;
    if (removeSignatures() || attempts >= maxAttempts) {
      clearInterval(intervalId);
    }
  }, 500);
};

// Use a MutationObserver to detect when new content is added to the page.
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      // When new nodes are added, start polling for signatures.
      startPollingForSignatures();
      break;
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

startPollingForSignatures();

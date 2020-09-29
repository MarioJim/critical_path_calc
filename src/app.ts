document.addEventListener('readystatechange', () => {
  if (document.readyState === 'interactive') {
    console.log('Doc ready');
  }
});

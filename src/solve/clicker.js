const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
sleep(Math.random() * 500).then(() => {
    dispatchEnter(document.getElementById('recaptcha-anchor'))
})

function dispatchEnter(node) {
    const keyEvent = {
      code: 'Enter',
      key: 'Enter',
      keyCode: 13,
      which: 13,
      view: window,
      bubbles: true,
      composed: true,
      cancelable: true
    };
  
    node.focus();
    node.dispatchEvent(new KeyboardEvent('keydown', keyEvent));
    node.dispatchEvent(new KeyboardEvent('keypress', keyEvent));
    node.click();
  }
  
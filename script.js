let modeIndex = 0; // 0: light, 1: dark, 2: ninja

function switchModes() {
  const body = document.body;

  const modes = [
    { background: 'linear-gradient(to right, white, ghostWhite)', color: 'black', label: 'Light Mode' },
    { background: 'linear-gradient(to right, slateblue, darkSlateBlue)', color: 'white', label: 'Dark Mode' },
    { background: 'linear-gradient(to right, #39ff14, #7D3C98)', color: 'white', label: 'Ninja Mode' }
  ];
  
  modeIndex = (modeIndex + 1) % modes.length;
  const currentMode = modes[modeIndex];
  
  body.style.background = currentMode.background;
  body.style.color = currentMode.color;
  
  const button = document.querySelector('.button__mode');
  button.textContent = currentMode.label;
}
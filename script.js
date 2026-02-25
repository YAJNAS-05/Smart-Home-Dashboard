// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.matches(".dropbtn")) {
      const dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach(dropdown => {
        dropdown.style.display = "none";
      });
    }
  });

// Entertainment System Controls
document.querySelector('.device-card:nth-child(3) button:first-child').addEventListener('click', function() {
  const systemName = this.closest('.device-card').querySelector('.device-name').textContent.trim();
  const switchInput = this.closest('.device-card').querySelector('.toggle-switch input');
  
  // Toggle the power state
  switchInput.checked = !switchInput.checked;
  
  // Update the button text based on state
  if (switchInput.checked) {
      this.innerHTML = '<i class="fas fa-play"></i> Power On';
      console.log(`${systemName} powered ON`);
  } else {
      this.innerHTML = '<i class="fas fa-power-off"></i> Power Off';
      console.log(`${systemName} powered OFF`);
  }
});

document.querySelector('.device-card:nth-child(3) button:last-child').addEventListener('click', function() {
  const systemName = this.closest('.device-card').querySelector('.device-name').textContent.trim();
  console.log(`Opening settings for ${systemName}`);
  // In a real app, this would open a settings modal or page
  alert(`Opening settings panel for ${systemName}`);
});

// Enhanced Entertainment System Controls
const powerBtn = document.querySelector('.power-btn');
const settingsBtn = document.querySelector('.settings-btn');
const entertainmentSwitch = document.querySelector('.device-card:nth-child(3) .toggle-switch input');

powerBtn.addEventListener('click', function() {
    // Toggle the power state
    entertainmentSwitch.checked = !entertainmentSwitch.checked;
    
    // Update UI based on state
    if (entertainmentSwitch.checked) {
        this.innerHTML = '<i class="fas fa-play"></i> Power On';
        this.style.backgroundColor = '#6a0dad';
        console.log('Entertainment System powered ON');
    } else {
        this.innerHTML = '<i class="fas fa-power-off"></i> Power Off';
        this.style.backgroundColor = '#ff3e3e';
        console.log('Entertainment System powered OFF');
    }
});

settingsBtn.addEventListener('click', function() {
    console.log('Opening Entertainment System settings');
    // In a real app, this would open a settings modal
    alert('Entertainment System Settings:\n\n- Input Selection\n- Volume Control\n- Display Settings\n- Audio Output');
});
// Saves options to chrome.storage
const saveOptions = () => {
    const darkMode = document.getElementById('darkMode').checked;
    const cijfers = document.getElementById('cijfers').checked;
  
    chrome.storage.sync.set(
      { darkMode: darkMode , cijfers: cijfers},
      () => {
        // Update status to let user know options were saved.
        //const status = document.getElementById('status');
        //status.textContent = 'Options saved.';
        //setTimeout(() => {
        //  status.textContent = '';
        //}, 1000);
      }
    );
  };
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {
    chrome.storage.sync.get(
      { darkMode: true, cijfers: false },
      (items) => {
        document.getElementById('darkMode').checked = items.darkMode;
        document.getElementById('cijfers').checked = items.cijfers;
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  //document.getElementById('save').addEventListener('click', saveOptions);
  document.getElementById('darkMode').addEventListener('change', saveOptions);
  document.getElementById('cijfers').addEventListener('change', saveOptions);


var darkOrLightMode = window.setInterval(function(){

  const body = document.getElementById("optionsBody")
  const darkLabel = document.getElementById("darkModeLabel")
  const cijferLabel = document.getElementById("cijfersLabel")

  chrome.storage.sync.get(
    { darkMode: true },
    (items) => {
      if (items.darkMode) {
        // dark mode ui
        body.style.backgroundColor = "#1F2228"
        
        darkLabel.style.color = "#FFFFFF"
        darkLabel.innerHTML.color = "#FFFFFF"
        cijferLabel.style.color = "#FFFFFF"
        cijferLabel.innerHTML.color = "#FFFFFF"
        
      }else {
        
        // light mode ui
        body.style.backgroundColor = "#FFFFFF"
        
        darkLabel.style.color = "#000000"
        darkLabel.innerHTML.color = "#000000"
        cijferLabel.style.color = "#000000"
        cijferLabel.innerHTML.color = "#000000"
        
      }
    }
  );
  }, 100);
document.addEventListener("DOMContentLoaded", function () {
  let getTitleButton = document.getElementById("getTitleButton");
  getTitleButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let tab = tabs[0];
      document.getElementById("tabTitle").textContent = tab.title;
    });
  });
});

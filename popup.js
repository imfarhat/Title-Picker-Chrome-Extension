document.addEventListener("DOMContentLoaded", function () {
  let getTitleButton = document.getElementById("getTitleButton");
  getTitleButton.addEventListener("click", function () {
    document.getElementById("tabTitle").textContent = "Loading...";
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let tab = tabs[0];
      document.getElementById("tabTitle").textContent = tab.title;
      document.getElementById("copyButton").classList.remove("hidden");
    });
  });
});

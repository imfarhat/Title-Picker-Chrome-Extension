document.addEventListener("DOMContentLoaded", function () {
  const getTitleButton = document.getElementById("getTitleButton");
  const copyButton = document.getElementById("copyButton");
  const tabTitleElement = document.getElementById("tabTitle");

  getTitleButton.addEventListener("click", function () {
    tabTitleElement.textContent = "Loading...";
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      tabTitleElement.textContent = tab.title;
      copyButton.classList.remove("hidden");
    });
  });

  copyButton.addEventListener("click", function () {
    const tabTitle = tabTitleElement.textContent;
    copyTextToClipboard(tabTitle);
    copyButton.textContent = "Title Copied";
    copyButton.disabled = true;
    setTimeout(() => {
      copyButton.textContent = "Copy Title";
      copyButton.disabled = false;
    }, 1500);
  });
});

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text);
}

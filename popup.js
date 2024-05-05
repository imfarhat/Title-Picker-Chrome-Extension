document.addEventListener("DOMContentLoaded", function () {
  let getTitleButton = document.getElementById("getTitleButton");
  let copyButton = document.getElementById("copyButton");

  getTitleButton.addEventListener("click", function () {
    document.getElementById("tabTitle").textContent = "Loading...";
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let tab = tabs[0];
      document.getElementById("tabTitle").textContent = tab.title;
      copyButton.classList.remove("hidden");
    });
  });

  copyButton.addEventListener("click", function () {
    const tabTitle = document.getElementById("tabTitle").textContent;
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
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

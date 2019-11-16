export const modalContainer = document.getElementById("modal-container");
export const closeSettings = document.getElementById("close-settings");
export const clearData = document.getElementById("clear-data");
export const closeMessage = document.getElementById("close-message");
export const closeExport = document.getElementById("close-export");

export const openSettings = document.getElementById("open-settings");

export const settingsBox = document.getElementsByClassName("settings-box")[0];
export const messageBox = document.getElementsByClassName("message-box")[0];
export const exportBox = document.getElementsByClassName("export-box")[0];

export const closeModal = () => {
  Array.from(modalContainer.children).forEach(child =>
    child.classList.remove("active")
  );

  if (modalContainer.classList.contains("fadeBg")) {
    modalContainer.classList.remove("fadeBg");
  }

  return modalContainer.classList.contains("active")
    ? modalContainer.classList.remove("active")
    : false;
};

export const activateModal = () =>
  modalContainer.classList.contains("active")
    ? false
    : modalContainer.classList.add("active");

export const openSettingsModal = () => {
  activateModal();
  modalContainer.classList.add("fadeBg");
  settingsBox.classList.add("active");
};

export const openExportModal = () => {
  activateModal();
  modalContainer.classList.add("fadeBg");
  exportBox.classList.add("active");
};

export const showMessageModal = (type, message, duration) => {
  activateModal();
  messageBox.classList.add("active");

  let messageTextContainer = messageBox.getElementsByClassName(
    "message-inner"
  )[0];

  switch (type) {
    case "error":
      messageBox.classList.add("error");
      break;
  }

  messageTextContainer.innerText = message;

  setTimeout(() => {
    messageBox.classList.remove("active");

    switch (type) {
      case "error":
        messageBox.classList.remove("error");
        break;
    }
  }, duration);
};

modalContainer.addEventListener("click", e => {
  e.target == modalContainer ? closeModal() : false;
});

[closeSettings, closeExport].forEach(button =>
  button.addEventListener("click", closeModal, false)
);

closeMessage.addEventListener("click", () =>
  messageBox.classList.remove("active")
);

clearData.addEventListener("click", () => {
  const original = clearData.innerText;
  clearData.innerText = "data cleared! refreshing.";
  STORAGE.clear();
  setTimeout(() => {
    clearData.innerText = original;
    setTimeout(() => window.location.reload(true), 500);
  }, 2000);
});

openSettings.addEventListener("click", () => openSettingsModal());

window.onerror = function(msg, src, line, col, err) {
  statusMessage("error", err);
};

export const statusMessage = (type, message, duration = 8000) => {
  showMessageModal(type, message, duration);
};

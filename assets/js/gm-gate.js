(() => {
  "use strict";

  const storageKey = "gm:breach-below-bergum";
  // Development password: bergum-gm-preview
  // Replace by running: printf '%s' 'NEW_PASSWORD' | sha256sum
  const passwordHash = "d99bd6409a00ad8239ad736de18aaee5985bef236e14551f3cd671226c9d4a02";
  const root = document.documentElement;
  const form = document.querySelector("[data-gm-form]");
  const error = document.querySelector("[data-gm-error]");

  const setUnlocked = (unlocked) => {
    root.classList.toggle("gm-unlocked", unlocked);
    root.classList.toggle("gm-locked", !unlocked);
    document.querySelector("#gm-content")?.setAttribute("aria-hidden", String(!unlocked));
    if (!unlocked) document.querySelector("#gm-password")?.focus();
  };

  const digest = async (value) => {
    const bytes = new TextEncoder().encode(value);
    const hash = await crypto.subtle.digest("SHA-256", bytes);
    return [...new Uint8Array(hash)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  };

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const input = form.elements.password;
    error.textContent = "";
    if (!window.crypto?.subtle) {
      error.textContent = "This browser cannot verify the password. Please use a current browser.";
      return;
    }
    if (await digest(input.value) === passwordHash) {
      try { sessionStorage.setItem(storageKey, "unlocked"); } catch (e) {}
      input.value = "";
      setUnlocked(true);
      document.querySelector(".gm-content h1")?.focus();
    } else {
      error.textContent = "That password did not match.";
      input.select();
    }
  });

  document.querySelectorAll("[data-gm-lock]").forEach((button) => {
    button.addEventListener("click", () => {
      try { sessionStorage.removeItem(storageKey); } catch (e) {}
      setUnlocked(false);
    });
  });

  let unlocked = false;
  try { unlocked = sessionStorage.getItem(storageKey) === "unlocked"; } catch (e) {}
  setUnlocked(unlocked);
})();

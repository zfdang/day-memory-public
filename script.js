const copyButton = document.querySelector("#copy-name");
const copyStatus = document.querySelector("#copy-status");
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("日有所念");
    copyStatus.textContent = "已复制，打开微信搜索「日有所念」吧。";
    copyButton.textContent = "已复制 ✓";
  } catch {
    copyStatus.textContent = "请长按或选中「日有所念」复制，在微信中搜索。";
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector(".search-name strong"));
    selection.removeAllRanges();
    selection.addRange(range);
  }
});

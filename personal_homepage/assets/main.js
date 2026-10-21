// HTML 负责内容，CSS 负责外观，这里只增强少量交互。
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const copyButton = document.querySelector("#copy-email");
const feedback = document.querySelector("#copy-feedback");
let feedbackTimer;

copyButton?.addEventListener("click", async () => {
  const email = "shichao0503@163.com";
  clearTimeout(feedbackTimer);
  try {
    // 剪贴板 API 通常需要 HTTPS 或 localhost；失败时保留手动复制路径。
    if (!navigator.clipboard?.writeText)
      throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(email);
    feedback.textContent = "邮箱已复制，期待交流。";
  } catch {
    feedback.textContent = `请选中上方邮箱手动复制：${email}`;
  }
  feedbackTimer = setTimeout(() => {
    feedback.textContent = "";
  }, 7000);
});

// Phase 1: 最小页面增强 — 页脚年份
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

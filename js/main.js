/* ================================================================
   EVONNE LAW — 主JS文件
   ================================================================ */

// 滚动进入动画
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .blog-card, .blog-featured, .about-card, .blog-list-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// 表单提交成功提示
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    // Formspree 会处理实际提交，这里只加个视觉反馈
    const btn = form.querySelector('button[type="submit"], .form-submit');
    if (btn) {
      setTimeout(() => {
        btn.textContent = '✓ 已发送！';
        btn.style.background = '#2D7A4F';
      }, 500);
    }
  });
});

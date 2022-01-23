window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.working__step').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.working__step').forEach(function (btn) {
        btn.classList.remove('working__step_active');
      });
      e.currentTarget.classList.add('working__step_active');
      document.querySelectorAll('.tabs__item').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tabs__item_active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item_active');
    });
  });

});

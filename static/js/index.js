document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.task-chart').forEach((chart) => {
    const defaultMetric = chart.dataset.defaultMetric || 'score';
    const buttons = chart.querySelectorAll('.task-toggle-button');
    const panels = chart.querySelectorAll('.task-chart-panel');

    const setMetric = (metric) => {
      buttons.forEach((button) => {
        button.classList.toggle('is-active', button.dataset.metric === metric);
      });

      panels.forEach((panel) => {
        panel.classList.toggle('is-active', panel.dataset.metricPanel === metric);
      });
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        setMetric(button.dataset.metric);
      });
    });

    setMetric(defaultMetric);
  });
});

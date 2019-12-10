export default function clearRegions() {
    const regions = ['account-region', 'day-region', 'tasks-region', 'important-region', 'calendar-region'];
    regions.forEach(region => {
      const regionsElements = document.getElementById(region);
      regionsElements.innerHTML = '';
    });
}
  
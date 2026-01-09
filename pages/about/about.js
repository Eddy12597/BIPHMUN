function positionTimelineCircles() {
  const timelineContainer = document.getElementById('timeline-container');
  const timelineEvents = document.querySelectorAll('.timeline-event');
  
  // Clear any existing circles (if re-running this function)
  const existingCircles = document.querySelectorAll('.timeline-circle');
  existingCircles.forEach(circle => circle.remove());
  
  // Get container dimensions
  const containerRect = timelineContainer.getBoundingClientRect();
  const containerWidth = containerRect.width;
  const paddingLeft = 40; // Match your CSS padding
  
  timelineEvents.forEach(event => {
  const circle = document.createElement('div');
  circle.classList.add('timeline-circle');

  const eventRect = event.getBoundingClientRect();
  const containerRect = timelineContainer.getBoundingClientRect();

  // Align circle with LEFT edge of the event container
  const leftOffset = eventRect.left - containerRect.left;

  circle.style.left = `${leftOffset+15}px`;

  timelineContainer.appendChild(circle);
});
}

// Run on page load
document.addEventListener('DOMContentLoaded', positionTimelineCircles);
window.addEventListener('resize', positionTimelineCircles);
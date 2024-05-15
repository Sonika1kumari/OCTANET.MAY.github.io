// Get all the progress bars
const progressBars = document.querySelectorAll('.progress');

// Loop through each progress bar
progressBars.forEach(progressBar => {
  // Get the progress value
  const progressValue = progressBar.querySelector('.progress').style.width;

  // Create a new GSAP timeline
  const tl = gsap.timeline();

  // Add a tween to the timeline
  tl.to(progressBar, {
    duration: 1,
    width: progressValue,
    ease: 'power3.out'
  });
});

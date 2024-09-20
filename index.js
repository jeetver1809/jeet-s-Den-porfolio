const projectContainers = document.querySelectorAll('.project-container');

projectContainers.forEach(project => {
  const innerElement = project.querySelector('.row'); // Target the inner element with class 'row'
  
  project.addEventListener('mouseover', () => {
    innerElement.style.transform = 'translateY(-10px) scale(1.03)';
    innerElement.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
  });

  project.addEventListener('mouseout', () => {
    innerElement.style.transform = 'translateY(0) scale(1)';
    innerElement.style.boxShadow = 'none';
  });
});

// experiment
//  projectContainers = document.querySelectorAll('.project-container');
// const pageOverlay = document.getElementById('page-overlay');

// projectContainers.forEach(project => {
//   project.addEventListener('mouseenter', () => {
//     pageOverlay.style.opacity = '1';
//   });

//   project.addEventListener('mouseleave', () => {
//     pageOverlay.style.opacity = '0';
//   });
// });
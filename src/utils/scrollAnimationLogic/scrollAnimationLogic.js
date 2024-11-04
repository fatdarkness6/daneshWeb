export function scrollAnimationLogic(props) {
    props.forEach((e) => {
        window.addEventListener('scroll', () => {
          let top = e.getBoundingClientRect().top;
          if (top < 700) {
            e.classList.add('active');
          }
        });
      });
}
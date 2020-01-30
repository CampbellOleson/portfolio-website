const scrollToRef = id => {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop,
      behavior: "smooth"
    });
  }
};

export default scrollToRef;

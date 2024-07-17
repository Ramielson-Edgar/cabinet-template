window.addEventListener('load', () => {
   const video = document.getElementById('hero-copy-trading');
 

   const visible = video.offsetWidth || video.offsetHeight ||
   video.getClientRects().length;

   
  if (visible) {
    const children = video.getElementsByTagName("source");

    for (let i = 0; i < children.length; ++i) {
      children[i].src = children[i].dataset.src;
    }
  }

  video.load();

})
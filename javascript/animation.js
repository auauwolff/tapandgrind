//------Scrolling section animation transition

const images = document.querySelectorAll('.anim');

        observer = new IntersectionObserver((entries) => {


             entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                    entry.target.style.animation = `anim1 2s forwards ease-out`;
                 // In case animate each eelement delay htmml = data-delay="0s" - ${entry.target.dataset.delay}
                }
                else {
                    entry.target.style.animation = 'none';
                }
            })          

        })

        images.forEach(image => {
            observer.observe(image)
        })

        
    //------Menu accordion animation set

        var menus = document.getElementsByClassName("menu");

        for (var i = 0; i < menus.length; i++){
            menus[i].onclick = function () {
                this.classList.toggle('is-open');
                var content = this.nextElementSibling;

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;

                } else{
                    content.style.maxHeight = content.scrollHeight + "px";

                }
            }
        }

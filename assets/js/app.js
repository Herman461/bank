// Обработка переходов назад/вперед
window.addEventListener('popstate', () => {
    location.reload();
});

window.addEventListener('DOMContentLoaded', function() {


    const wrapper = document.querySelector('.wrapper')
    const links = document.querySelectorAll('a')
    for (let i = 0; i < links.length; i++) {
        const link = links[i]
        link.addEventListener('click', function (e) {
            e.preventDefault()
            history.pushState({urlPath: link.href}, "", link.href);
            if (link.href.includes('nko')) {
                wrapper.innerHTML = `
                <div class="single block">
    <div class="single__container container">
        <div class="single__text single__text_l text">
            <p>Мы помогаем строить отношения между НКО <br>и корпоративным сектором, чтобы вместе <br>решать социальные проблемы</p>
        </div>
        <a href="" class="single__button button">стать партнёром</a>
        <div class="single__image single__image_b">
            <img src="assets/images/handshake.png" alt="">
        </div>
    </div>
</div>
                `
            }

            if (link.href.includes('partners')) {
                wrapper.innerHTML = `<div class="single block">
                    <div class="single__container container">
                        <div class="single__text text">
                            <p>Мы бесплатно предоставляем НКО продукты и сервисы, с которым <br>легче и проще работать
                            </p>
                        </div>
                        <a href="" class="single__button button">присоединиться</a>
                        <div class="single__image">
                            <img src="assets/images/hand.png" alt="">
                        </div>
                    </div>

                </div>
                `
            }
        })
    }

})

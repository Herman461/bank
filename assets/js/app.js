// Обработка переходов назад/вперед
window.addEventListener('popstate', () => {
    location.reload();
});
function openScreen1() {

    (async () => {
        const response = await fetch('http://192.168.2.14:9981/Active1', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
    })()
}
function openScreen2() {

    (async () => {
        const response = await fetch('http://192.168.2.14:9981/Active2', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
    })()
}

function openScreen() {
    openScreen1()
    openScreen2()
}

window.addEventListener('DOMContentLoaded', function () {


    const wrapper = document.querySelector('.wrapper')
    const links = document.querySelectorAll('a')
    for (let i = 0; i < links.length; i++) {
        const link = links[i]
        link.addEventListener('click', function (e) {

            e.preventDefault()


            history.pushState({urlPath: link.href}, "", link.href);
            if (link.href.includes('nko')) {
                openScreen1()
                wrapper.innerHTML = `
                <div class="single block">
    <div class="single__container container">
        <div class="single__text single__text_l text">
            <p>Мы помогаем строить отношения между НКО <br>и корпоративным сектором, чтобы вместе <br>решать социальные проблемы</p>
        </div>
        <a onclick="openScreen();" href="https://технологиидобра.рф/partner" class="single__button button">стать партнёром</a>
        <div class="single__image single__image_b">
            <img src="assets/images/handshake.png" alt="">
        </div>
    </div>
</div>
                `
            }

            if (link.href.includes('partners')) {
                openScreen2()
                wrapper.innerHTML = `<div class="single block">
                    <div class="single__container container">
                        <div class="single__text text">
                            <p>Мы бесплатно предоставляем НКО продукты и сервисы, с которым <br>легче и проще работать
                            </p>
                        </div>
                        <a onclick="openScreen();" href="https://технологиидобра.рф/register?utm_source=site_button_main&utm_medium=button&utm_campaign=new_main_button" class="single__button button">присоединиться</a>
                        <div class="single__image">
                            <img src="assets/images/hand.png" alt="">
                        </div>
                    </div>

                </div>
                `
            }

            if (link.href.includes('kind-donate')) {
                wrapper.innerHTML = `<div class="kind kind_kind block">


        <div class="kind__container container">
            <header class="header">
                <div class="header__logo header__logo_big">
                    <img src="assets/images/kind/logo.svg" alt="">
                </div>
            </header>
            <div class="kind__body">
                <div class="kind__text text text_big">
                    <p>
                        Выберите сбор или фонд, <br>
                        сделайте пожертвование <br>
                        и <span>увеличьте его втрое</span> <br>
                        добробаллами
                    </p>
                    <a onclick="openScreen();" href="https://технологиидобра.рф/register?utm_source=site_button_main&utm_medium=button&utm_campaign=new_main_button" class="kind__button button_pink button">все сборы</a>
                </div>
                <div class="kind__image kind__image_abs">
                    <img src="assets/images/kind/kind-plant.png" alt="">
                </div>
            </div>
        </div>

    </div>
                `
            }

            if (link.href.includes('kind-partners')) {
                wrapper.innerHTML = `
                 <div class="kind kind_kind block">


                    <div class="kind__container kind__container_static container">
                        <header class="header">
                            <div class="header__logo header__logo_big">
                                <img src="assets/images/kind/logo.svg" alt="">
                            </div>
                        </header>
                        <div class="kind__body">
                            <div class="kind__text text text_big">
                                <p>
                                    Приглашаем НКО стать нашим <br>
                                    партнёром! За подробной информацией <br>
                                    обратитесь к менеджеру или <br>
                                    заполните заявку онлайн
                                </p>
                                <a onclick="openScreen();" href="https://технологиидобра.рф/partner"
                                   class="kind__button button_pink button">стать партнёром проекта</a>
                            </div>
                            <div class="kind__image kind__image_t kind__image_abs">
                                <img src="assets/images/kind/hand.png" alt="">
                            </div>
                        </div>
                    </div>

                </div>
                `
            }

        })
    }


})



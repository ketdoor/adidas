window.addEventListener("load", event => {

    function productHeading() {
        ////////////////
        // Variables
        ////////////////

        const product = {

            value: 125,
            images: [{
                    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJNc7bdIQ-VRH6kkLhRMZM2nZpKlJKRnu_P8o-FlRjxhHTOo2Bung_xHf-UwcVzWx79J_ScF_7OANTcu_KG3WCe_PcVcFk98XsExg05lnIszaSP-sfnT2mFguU6sxPJinTGTzjbO9UX8Ly-fA3cP2ZLRtk7Is5FMWFQs9oQJhqKJw_EOS4oM5_P9cOtO5V/s800/222.png'
                },
                {
                    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCVwJABbflghbHe-114Z0cfw6YRP4YW3aBgpUWNCxlQPIRpFJQ4TzdFPBRXrPRGjc8IwIaoZelFIRkqKOWNoquZ-F16YsJX1cj2jOxyZgRsVMqBCogf3OUzogPUj4BLvgQNEdtejM36RecCPxEJVgEavCGzvo6WV2ScMX_qPjaSy_BWwPiTQ-KE3bA2rLJ/s800/333.png'
                },
                {
                    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEja3uBRDzYSMIa7px646ksFtyUIyMRkRyTGQfg_3s63aTE9RKAP6GMD89uckEMqKouFeVeMHPYWn9T02rbKSTpaDa5oYv388eAvLLbWFgJ0yrAzoxz0JGrlJ7t8YItwNZn1c9Y3aAkn-ZwuMhexGXqkIciScThYkZTNSyXoC5WsFT50lnnzrh1vnAL_Oego/s800/444.png'
                },
                {
                    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh500cefdQfNuUs8W1w_zpMEjDlfUK8uhu1yQrmYcYKcRkTVKqrz6awuUpbjKUq2rTH0OymHue4AgYCtnTTQD3LdWiJOTEieexwLpXzWWNstuPX5P9aLTfu9fWVWU6e-jArF46u20pxDawWRbzJM1ROGG9DOHHoMmBuoX5UMa4xGWWAWRtUn-n4Sm_3BTc6/s800/666.png'
                },
                {
                    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhs8nnQG6mr1ZlfJY-pgMQyB2h8nH88HSCIZhxbqoEwPMRzutCYpyQUvhcZWF3MhM-TLMSGYdXBUJLQ4KIxKao8upbrbUS7pkKdb12SrgY5pu1DouVSKiGj0eVhmeGN84HMxsAgPqGCyhPAZ4lGLoMlk3s3b12on0OJkPQk05j8ylI_jmU2q1QXnWvB01Up/s800/777.png'
                },
                {
                    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7bJIuvY3VYKQLZ2zoBqlxpvX58_rCw_VPgp-CGli64p432oCnNdpdKBUZAsDivHKuOD-ZxPUJ6F3E8LFPgrbeJ6K4RLA6kC3OXecw_IiDeYsbmXQcEc7MeoabhmEKegODJ4AmRiE7xnbGhEGG8MRrmDnSgq-YXURiz-0lJM7HBym3P9XSVz9TBo8aw0Xx/s800/555.png'
                }
            ]
        }

        const btnAdd = document.querySelector('.btn.add'),
            btnContainer = document.querySelector('.btnContainer'),
            wrapper = document.querySelector('.wrapper'),
            itemNumber = document.querySelector('.itemNumber'),
            shoppingQuantity = document.querySelector('.shoppingQuantity'),
            inputQuantity = document.querySelector('.inputQuantity'),
            plus = document.querySelector('.plus'),
            minus = document.querySelector('.minus'),
            arrowDrop = document.querySelector('.arrowDrop'),
            dropdown = document.querySelector('.dropdown'),
            nav = document.querySelector('nav'),
            error = document.querySelector('.error'),
            shoppingIcon = document.querySelector('.shoppingIcon'),
            shoppingMenu = document.querySelector('.shoppingMenu'),
            emptyCart = document.querySelector('.emptyCart');

        let = priceFinal = document.querySelector('.priceFinal'),
            priceOriginal = document.querySelector('.priceOriginal'),
            discount = null,
            sizeNumber = document.querySelector('.sizeNumber'),
            dropItem = document.querySelectorAll('.dropItem'),
            maxQuantity = 5,
            newMaxQuantity = maxQuantity;

        ////////////////
        // Events
        ////////////////

        btnAdd.addEventListener('click', addItem);
        plus.addEventListener("click", plusQuantity);
        minus.addEventListener("click", minusQuantity);
        arrowDrop.addEventListener("click", openDrop);
        shoppingIcon.addEventListener("click", openShoppingCart);

        emptyCart.addEventListener("click", cleanCart);

        dropItem.forEach(function (el) {
            el.addEventListener("click", getSize);
        })

        window.addEventListener("resize", resize);


        ////////////////
        // Functions
        //////////////// 

        // Fixed Nav 

        window.onscroll = function () {
            if (window.pageYOffset >= 60) {
                nav.classList.add("fixed");
            } else {
                nav.classList.remove("fixed");
            }
        };

        // Change button position on mobile

        function resize() {
            //Button
            if (window.innerHeight > wrapper.offsetHeight) {
                btnContainer.classList.remove('fixedBtn');
            } else {
                btnContainer.classList.add('fixedBtn');
            }
            parallax();
        }

        // Parallax

        function parallax() {
            if (window.innerWidth > 800) {
                var scene = document.querySelectorAll('.scene');
                scene.forEach(pic => {
                    var parallax = new Parallax(pic);
                })
            }
        }

        // Calculate the Discount

        function getDisccount() {
            priceOriginal.innerText = product.value + "€";
            discount = product.value - (product.value * (30 / 100));
            priceFinal.innerText = discount + "€";
        }

        // Calculate the the Prices with discounts

        function getPrice() {

            priceFinal.innerText = discount * inputQuantity.value + "€";
            priceOriginal.innerText = product.value * inputQuantity.value + "€";

            setTimeout(() => {
                priceFinal.classList.remove('anime');
            }, 400);
        }

        // Update the prices with the quantity counter

        function plusQuantity() {
            if (inputQuantity.value < maxQuantity) {
                inputQuantity.value == inputQuantity.value++;
                priceFinal.classList.add('anime');
            }
            getPrice();
        }

        function minusQuantity() {
            if (inputQuantity.value > 1) {
                inputQuantity.value == inputQuantity.value--;
                priceFinal.classList.add('anime');
            }
            getPrice();
        }

        // Add items to shopping cart

        function addItem() {

            let cenas = parseInt(itemNumber.innerText) + parseInt(inputQuantity.value);

            if (cenas <= newMaxQuantity) {
                itemNumber.style.display = "flex";
                itemNumber.innerText = cenas;
                shoppingQuantity.innerText = "x" + cenas;
                itemNumber.classList.add("addItem");
                error.style.display = "none";
            } else {
                error.style.display = "flex";
            }

            setTimeout(() => {
                itemNumber.classList.remove("addItem");
            }, 700);
        }

        // Open Drop

        function openDrop() {
            if (dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
            } else {
                dropdown.classList.add('open');
            }
        }

        //get Drop Size Number Value 

        function getSize(e) {
            sizeNumber.innerText = e.currentTarget.innerText;
            openDrop();
        }

        // Open Shopphing cart

        function openShoppingCart() {
            if (itemNumber.innerText != "0") {
                if (shoppingMenu.classList.contains('openShopping')) {
                    shoppingMenu.classList.remove('openShopping');
                } else {
                    shoppingMenu.classList.add('openShopping');
                }
            }
        }

        //Clean Shopping Cart

        function cleanCart() {
            shoppingMenu.classList.remove('openShopping');
            itemNumber.style.display = "none";
            itemNumber.classList.remove('addItem');
            itemNumber.innerText = "0";
        }

        // Populate the images for Swiper

        product.images.forEach(function (el) {

            let template = `
                <div class="swiper-slide">
                    <div class="scene" data-hover-only="false"> 
                        <img src="${el.img}" data-depth="0.5">
                        <img src="${el.img}" data-depth="1" class="shadow">
                    </div>
                </div>`;

            let template2 = `
                <div class="swiper-slide">
                    <img src="${el.img}">
                </div>`;

            document.querySelector('.galleryMain .swiper-wrapper').insertAdjacentHTML('beforeend', template);
            document.querySelector('.galleryThumbs .swiper-wrapper').insertAdjacentHTML('beforeend', template2);
        });


        // Make the slider function

        var galleryThumbs = new Swiper('.galleryThumbs', {
            spaceBetween: 0,
            slidesPerView: 'auto',
            loop: false,
            allowTouchMove: false,
            allowSlidePrev: false,
            allowSlideNext: false,

        });

        var galleryMain = new Swiper('.galleryMain', {
            spaceBetween: 300,
            speed: 500,
            loop: true,
            loopedSlides: 5, //looped slides should be the same
            effect: "coverflow",
            coverflowEffect: {
                rotate: 50,
                slideShadows: false,
                depth: 200,
                stretch: 50,

            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,

            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });

        // Call functions 
        getDisccount();
        parallax();
        resize();
    }

    productHeading();
});
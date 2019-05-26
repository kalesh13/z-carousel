export class zCarousal {
    constructor(element) {
        this.jQueryCarousal = element;

        this.items = null;
        this.paginators = null;
        this.currentIndex = 0;

        this.timer = null;
    }

    static registerCarousals() {
        //Check for the existence of jquery
        if (!window.$) {
            console.log("JQuery should be added before execution of this class");
            return;
        }

        $('.z-carousal').each(function () {
            let carousal = new zCarousal($(this));
            carousal.registerCarousal();
        });
    }

    registerCarousal() {
        //
        // Load the settings of the carousal like 
        // exit animation, enter animation, reset animation
        // duration of each item
        //
        this.loadDatas();

        let items = this.loadItems();

        // Show the first item and set the remaining items
        // to display:none;
        this.initItems(items, 0);

        // Add pagination if pagination is required by the settings
        // Pagination also adds a click handler to handle
        // the navigation
        if (this.jQueryCarousal.data('pagination') == true) {
            this.addPagination();
        }

        // Finally register the timer. This will initiate the 
        // carousal animation after a delay of 3 seconds or delay
        // settings set by the carousal.
        //
        // Register the carousal timer only if the number of items
        // is greater than 1
        if (items && items.length > 1) {
            this.registerCarousalTimer();
        }
    }

    registerCarousalTimer() {
        let self = this;

        setTimeout(function (self) {
            self.deregisterCarousalTimer();

            self.timer = setInterval(self.showNextItem, self.interval, self);
        }, self.delay, self)
    }

    deregisterCarousalTimer() {
        if (this.timer == null) return;

        clearInterval(this.timer);
        this.timer = null;
    }

    showNextItem(context) {
        let nextItemIndex = context.currentIndex + 1;

        if (nextItemIndex >= context.items.length) {
            nextItemIndex = 0;
        }
        context.showHideItems(context.items, nextItemIndex);
    }

    initItems(items, showIndex) {
        if (!items) return;

        let self = this;
        this.currentIndex = showIndex;

        items.each(function (index) {
            //
            // Register animation end event if a custom animation
            // has been defined
            //
            if (self.enterAnimation) {
                self.registerAnimationEnd($(this));
            }

            if (index != showIndex)
                return self.hideItem(index, $(this));
            return self.showItem(index, $(this));
        });
    }

    registerAnimationEnd(jQueryElement) {
        if (!jQueryElement) return;

        let self = this;

        jQueryElement.on('animationend', function () {
            jQueryElement.css('opacity', '');
            jQueryElement.removeClass('animated');
            jQueryElement.removeClass(self.enterAnimation);
        });
    }

    showHideItems(items, showIndex) {
        if (!items) return;

        let currentItem = items.get(this.currentIndex);
        this.hideItem(this.currentIndex, $(currentItem));

        this.currentIndex = showIndex;

        let nextItem = items.get(this.currentIndex);
        this.showItem(this.currentIndex, $(nextItem));
    }

    loadItems() {
        if (this.jQueryCarousal) {
            this.items = this.jQueryCarousal.find('li');
            return this.items;
        }
        return null;
    }

    loadDatas() {
        if (!this.jQueryCarousal) return;

        this.delay = this.jQueryCarousal.data('delay') || 2000;
        this.interval = this.jQueryCarousal.data('interval') || 3000;
        this.animateSpeed = this.jQueryCarousal.data('speed') || 600;

        this.enterAnimation = this.jQueryCarousal.data('enterAnimation');
    }

    hideItem(index, jQueryElement) {
        if (!jQueryElement) return;

        jQueryElement.css("display", "none");

        let paginator = this.getPaginatorAtIndex(index);

        if (paginator) {
            paginator.removeClass('selected');
        }
    }

    showItem(index, jQueryElement) {
        if (!jQueryElement) return;

        if (this.enterAnimation) {
            jQueryElement.css('opacity', '0');
            jQueryElement.css('display', '');
            jQueryElement.addClass('animated');
            jQueryElement.addClass(this.enterAnimation);
        } else {
            jQueryElement.fadeIn(this.animateSpeed);
        }

        let paginator = this.getPaginatorAtIndex(index);

        if (paginator) {
            paginator.addClass('selected');
        }
    }

    addPagination() {
        if (!this.jQueryCarousal) return;

        let parent = this.jQueryCarousal.parent('.z-carousal-wrapper');
        let paginators = this.createPaginators();

        parent.append($("<div class='z-carousal-pagination'></div>").append(paginators));
    }

    createPaginators() {
        if (!this.items) return;

        let self = this;

        this.items.each(function (index) {
            let paginator = $("<a href='#'></a>");

            paginator.click(function (e) {
                e.preventDefault();

                self.deregisterCarousalTimer();

                self.showHideItems(self.items, index);

                // register a new timer;
                self.registerCarousalTimer();
            });

            if (!self.paginators) {
                self.paginators = $();
            }
            self.paginators = self.paginators.add(paginator);
        });
        return self.paginators;
    }

    getPaginatorAtIndex(index) {
        if (!this.paginators) return null;

        return $(this.paginators.get(index));
    }
}
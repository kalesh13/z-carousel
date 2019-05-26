# z-Carousel [![GitHub release](https://img.shields.io/github/release/kalesh13/z-Carousel.svg)](https://github.com/kalesh13/z-Carousel/releases) [![npm version](https://badge.fury.io/js/z-carousel.svg)](https://badge.fury.io/js/z-carousel)
A simple, high-performance and cross-browser jQuery text rotator and carousel plugin for Vue.js. The plugin supports usage of Animate.css animations.

### Prerequisites

z-Carousel is a jQuery based plugin. So, please make sure that jQuery is installed and has been initialized before z-Carousel is initialized.

Install jQuery via npm:

```
npm install --save-dev jquery
```

z-Carousel by default uses jQuery's ```fadeIn``` animation. [Animate.css](https://github.com/daneden/animate.css) has to be installed if you want to use a custom animation.

Install Animate.css via npm:

```
npm install --save-dev animate.css
```

z-Carousel also supports carousel pagination which uses a [FontAwesome](https://github.com/FortAwesome/Font-Awesome) icon by default. Install FontAwesome to use the default pagination style. You can skip FontAwesome installation, if pagination is not required or if you want to custom style the pagination icons.

Install FontAwesome via npm:

```
npm install --save-dev font-awesome
```

## Installation

**Install via npm:**

```
npm install --save-dev z-carousel
```

**Or, Standalone installation**

* Download the file from [here](https://raw.githubusercontent.com/kalesh13/z-Carousel/master/build/index.js)
* Save the downloaded file in your server.
* Import the file in your application using ```<script src="path_to_downloaded_file"></script>```
* Plugin initialization is given at the bottom of Usage section.

## Usage

z-Carousel is easy to implement in your existing applications.

**HTML Sample**

```
<div class="z-carousel-wrapper">
    <div class="z-carousel" data-delay="2000" data-interval="4000">
        <ul>
            <li style="display:none;">
                Beautiful templates, super-fast turnaround, and awesome staff. Thank you Send2Sell for helping close my listings!
            </li>
            <li style="display:none;">
                I love Send2Sell! I use the service for all of my listings and get so much interest after each email blast.
            </li>
        </ul>        
    </div>
</div>
```

* Carousel pagination, if required, is added by the plugin as the last child element of ```z-carousel-wrapper``` container. So, it is adviced to keep the carousel element list within this container.

* A single page can have multiple carousel elements and z-Carousel will handle each carousel differently. z-Carousel looks for all the elements in the DOM with ```z-carousel``` class and register a carousel for the element.

* Set the ```li``` items to have ```display:none;``` style. This is to make sure that the UI does not look bad  before the initilization of the plugin.

* As you can see, the element with ```z-carousel```  is where we define the various customization options. Following are the data fields and their default values used in the plugin to customise the carousel.

| Data   | Default | Description |
| :------ | :-------: | :----------- |
| data-pagination | false | Set this field ```data-pagination='true'``` to show carousel pagination |
| data-delay | 2000ms | Define the initial delay after which the carousel rotation should begin. For initial delay of 5 seconds, set ```data-delay='5000'``` as in ```<div class='z-carousel' data-delay='5000'>``` |
| data-interval | 3000ms | This property determines, how long an item has to be displayed. For displaying an item for 3.5 seconds, set ```data-interval='3500'``` |
| data-speed | 600ms | This is the speed at which jQuery's ```fadeIn``` completes animation. If the animation has to be completed in 1 second, set ```data-speed='1000'```. This data does nothing, if a custom animation is used. |
| data-enter-animation | *Uses jQuery's fadeIn animation* | Define this property to use a custom animation provided by Animate.css. To have a ```bounceIn``` animation, set ```data-enter-animation='bounceIn'```. To use the Animate.css ```slow``` class, set ```data-enter-animation='bounceIn slow'```. Similarly, all the Animate.css speed classes can be used. |

**Plugin Initialization**

* In Vue.js components or in ES6 scripts, import the plugin using ```import zCarousel from "z-carousel"```
* Initialise the plugin using ```zCarousel.registerCarousels();```

For example, in Vue.js component
```
//
// you can use any variable name for the import.
//
import carousel from "z-carousel"

export default{
    mounted:function(){
        carousel.registerCarousels();
    }
}
```

**Plugin Initialization of Standalone Installation**

```
<script type='text/javascript'>
    $(function() {                
        zCarousel.registerCarousels();
    });
</script>
```

## Authors

* **[Kalesh Kaladharan](https://github.com/kalesh13)** - **Send2Sell Inc**

See also the list of [contributors](https://github.com/kalesh13/z-Carousel/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

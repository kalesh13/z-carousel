# z-Carousal [![GitHub release](https://img.shields.io/github/release/kalesh13/z-Carousal.svg)](https://github.com/kalesh13/z-Carousal/releases) [![npm version](https://badge.fury.io/js/z-carousal.svg)](https://badge.fury.io/js/z-carousal)
A simple, high-performance and cross-browser jQuery text rotator and carousal plugin for Vue.js. The plugin supports usage of Animate.css animations.

### Prerequisites

z-Carousal is a jQuery based plugin. So, please make sure that jQuery is installed and has been initialized before z-Carousal is initialized.

Install jQuery via npm:

```
npm install --save-dev jquery
```

z-Carousal by default uses jQuery's ```fadeIn``` animation. [Animate.css](https://github.com/daneden/animate.css) has to be installed if you want to use a custom animation.

Install Animate.css via npm:

```
npm install --save-dev animate.css
```

z-Carousal also supports carousal pagination which uses a [FontAwesome](https://github.com/FortAwesome/Font-Awesome) icon by default. Install FontAwesome to use the default pagination style. You can skip FontAwesome installation, if pagination is not required or if you want to custom style the pagination icons.

Install FontAwesome via npm:

```
npm install --save-dev font-awesome
```

## Installation

**Install via npm:**

```
npm install --save-dev z-carousal
```

**Or, Standalone installation**

* Download the file from [here](https://raw.githubusercontent.com/kalesh13/z-Carousal/master/build/index.js)
* Save the downloaded file in your server.
* Import the file in your application using ```<script src="path_to_downloaded_file"></script>```
* Plugin initialization is given at the bottom of Usage section.

## Usage

z-Carousal is easy to implement in your existing applications.

**HTML Sample**

```
<div class="z-carousal-wrapper">
    <div class="z-carousal" data-delay="2000" data-interval="4000">
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

* Carousal pagination, if required, is added by the plugin as the last child element of ```z-carousal-wrapper``` container. So, it is adviced to keep the carousal element list within this container.

* A single page can have multiple carousal elements and z-Carousal will handle each carousal differently. z-Carousal looks for all the elements in the DOM with ```z-carousal``` class and register a carousal for the element.

* Set the ```li``` items to have ```display:none;``` style. This is to make sure that the UI does not look bad  before the initilization of the plugin.

* As you can see, the element with ```z-carousal```  is where we define the various customization options. Following are the data fields and their default values used in the plugin to customise the carousal.

| Data   | Default | Description |
| :------ | :-------: | :----------- |
| data-pagination | false | Set this field ```data-pagination='true'``` to show carousal pagination |
| data-delay | 2000ms | Define the initial delay after which the carousal rotation should begin. For initial delay of 5 seconds, set ```data-delay='5000'``` as in ```<div class='z-carousal' data-delay='5000'>``` |
| data-interval | 3000ms | This property determines, how long an item has to be displayed. For displaying an item for 3.5 seconds, set ```data-interval='3500'``` |
| data-speed | 600ms | This is the speed at which jQuery's ```fadeIn``` completes animation. If the animation has to be completed in 1 second, set ```data-speed='1000'```. This data does nothing, if a custom animation is used. |
| data-enter-animation | *Uses jQuery's fadeIn animation* | Define this property to use a custom animation provided by Animate.css. To have a ```bounceIn``` animation, set ```data-enter-animation='bounceIn'```. To use the Animate.css ```slow``` class, set ```data-enter-animation='bounceIn slow'```. Similarly, all the Animate.css speed classes can be used. |

**Plugin Initialization**

* In Vue.js components or in ES6 scripts, import the plugin using ```import zCarousal from "z-carousal"```
* Initialise the plugin using ```zCarousal.registerCarousals();```

For example, in Vue.js component
```
//
// you can use any variable name for the import.
//
import carousal from "z-carousal"

export default{
    mounted:function(){
        carousal.registerCarousals();
    }
}
```

**Plugin Initialization of Standalone Installation**

```
<script type='text/javascript'>
    $(function() {                
        zCarousal.registerCarousals();
    });
</script>
```

## Authors

* **[Kalesh Kaladharan](https://github.com/kalesh13)** - **Send2Sell Inc**

See also the list of [contributors](https://github.com/kalesh13/z-Carousal/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

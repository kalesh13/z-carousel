# z-Carousal
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

Install via npm:

```
npm install --save-dev z-carousal
```

### Usage

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

As you can see, the element with ```z-carousal```  is where we define the various data we want to submit to z-Carousal. Following are the data the plugin takes to customise the carousal.

| Data | Default | Description |
| ---- | ------- | ----------- |
| data-delay | 2000ms | Define the initial delay after which the carousal rotation should begin. For example, ```<div class='z-carousal' data-delay='5000'>``` for initial delay of 5 seconds |
| data-interval | 3000ms |  |
| data-speed | 600ms |  |
| data-enter-animation | *Uses jQuery's fadeIn animation* |  |
| data-pagination | false |  |

## Authors

* **[Kalesh Kaladharan](https://github.com/kalesh13)** - **Send2Sell Inc**

See also the list of [contributors](https://github.com/kalesh13/z-Carousal/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

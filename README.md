# jQuery.extendy
Common jQuery tasks re-packaged as independent utility methods. Works in tandem with jQuery’s core library.

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `jQuery.extendy.js` in the `<head>` of your HTML doc:
```html
<script src="jQuery.min.js"></script>  
<script src="jQuery.extendy.js"></script>
```

## How to Use
Reference the intended method as you typically would using normal jQuery syntax.  
See the extended API ( below ) for a complete list of available options.

**Normal**

```javascript
var timeOut;

$(window).resize(function() {

    clearTimeout(timeOut);
    
    timeOut = setTimeout(function() {

        // Execute After 500ms
        
    }, 500);
    
});
```
**Extendy**
```javascript
$(window).resizeEnd(function() {
    
    // Execute After 500ms
    
}, 500);
```

## API Extended
**.animateLeft( offset, duration, easing )**  
`Animate the scrollLeft position of matched elements`

**.animateTop( offset, duration, easing )**  
`Animate the scrollTop position of matched elements` 

**.fadeToEach( delay, duration, opacity )**  
`Fade the opacity of each element after specified delay`

**.fadeInEach( delay, duration )**  
`Show each element by fading in after specified delay`

**.fadeOutEach( delay, duration )**  
`Hide each element by fading out after specified delay`

**.toggleAttr( attr, name )**  
`Toggle the attribute of matched elements`

**.toggleId( name )**  
`Toggle the id of matched elements`

**.toggleHeight( start, end )**  
`Toggle the height of matched elements`  

**.toggleWidth( start, end )**  
`Toggle the width of matched elements`

**.fadeToggleAttr( attr, name, duration )**   
`Fade toggle matched elements and attribute simultaneously`

**.fadeToggleClass( name, duration )**  
`Fade toggle matched elements and class simultaneously`

**.fadeToggleId( name, duration )**   
`Fade toggle matched elements and id simultaneously`

**.slideToggleAttr( attr, name, duration, easing )**   
`Slide toggle matched elements and attribute simultaneously`

**.slideToggleClass( name, duration, easing )**   
`Slide toggle matched elements and class simultaneously` 

**.slideToggleId( name, duration, easing )**   
`Slide toggle matched elements and id simultaneously` 

**.slideToggleHeight( start, end, duration, easing )**    
`Slide toggle the height of matched elements`  

**.slideToggleWidth( start, end, duration, easing )**   
`Slide toggle the width of matched elements` 

**.showEach( delay )**  
`Show each element after specified delay `

**.hideEach( delay )**  
`Hide each element after specified delay`

**.nextLoop( element )**  
`Get the next or first sibling of matched elements`

**.prevLoop( element )**  
`Get the prev or last sibling of matched elements`

**.scrollBottom( )**  
`Get the scroll position relative to the document bottom`  

**.scrollRight( )**  
`Get the scroll position relative to the document right`  

**.removeAll( name, attr )**  
`Remove class and attributes simultaneously`  

**.resizeEnd( fn, delay )**  
`Execute function after the resize event completes`

**.duplicate( count )**  
`Clone multiple copies of matched elements`

**.outerHTML( )**  
`Get the HTML fragment including matched elements`

**.reverse( )**  
`Iterate all matched elements in reverse order`
  

## Contribute
Want to contribute? Submit a `Pull Request` with the proposed method extension—please keep it simple and use a relevant ( to existing code ) naming convention.

## Feedback
If you discover any issues or have questions regarding usage, please send a message to [code@nath.co](mailto:code@nath.co) or find me on GitHub [@nathco](https://github.com/nathco).
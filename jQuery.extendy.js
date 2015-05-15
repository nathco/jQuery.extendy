// Plugin: jQuery.extendy
// Source: github.com/nathco/jQuery.extendy
// Author: Nathan Rutzky
// Update: 1.0.1

(function($) {

    jQuery.fn.extend({
    
        animateLeft: function(offset, duration, easing) {
        
            return this.each(function() {
            
                $('html, body').stop().animate({
                    
                    scrollLeft: $(this).offset().left + offset
                    
                }, duration, easing);
                                     
            });         
        },
        
        animateTop: function(offset, duration, easing) {
        
            return this.each(function() {
            
                $('html, body').stop().animate({
                    
                    scrollTop: $(this).offset().top + offset
                    
                }, duration, easing);
                                     
            });
        },
        
        fadeToEach: function(delay, duration, opacity) {
        
            return this.each(function(i) {
                
                $(this).delay(i * delay).fadeTo(duration, opacity);
                                 
            });         
        },
        
        fadeInEach: function(delay, duration) {
        
            return this.each(function(i) {
                
                $(this).hide().delay(i * delay).fadeIn(duration);
                                 
            });         
        },
        
        fadeOutEach: function(delay, duration) {
        
            return this.reverse().each(function(i) {
            
                $(this).delay(i * delay).fadeOut(duration);
                                 
            });         
        },
                
        toggleAttr: function(attr, name) {
        
            return this.attr(attr, function(i, val) {
        
                return val == name ? null : name;
        
            });     
        },
        
        toggleId: function(name) {
        
            return this.attr('id', function(i, val) {
        
                return val == name ? null : name;
        
            });     
        },
        
        toggleHeight: function(start, end) {

            return this.each(function() {

                $(this).height($(this).height() == start ? end : start);

            });
        },
        
        toggleWidth: function(start, end) {

            return this.each(function() {

                $(this).width($(this).width() == start ? end : start);

            });
        },
        
        fadeToggleAttr: function(attr, name, duration) {
        
            return this.each(function() {
            
                $(this).stop().fadeToggle(duration).toggleAttr(attr, name); 
                                 
            });         
        },
        
        fadeToggleClass: function(name, duration) {
        
            return this.each(function() {
            
                $(this).stop().fadeToggle(duration).toggleClass(name);
                                 
            });         
        },
        
        fadeToggleId: function(name, duration) {
        
            return this.each(function() {
            
                $(this).stop().fadeToggle(duration).toggleId(name); 
                                 
            });         
        },
        
        slideFadeToggle: function(duration, easing, callback) {
            
            return this.animate({
                
                opacity: 'toggle', height: 'toggle'
                
            }, duration, easing, callback);
        }, 
        
        slideToggleAttr: function(attr, name, duration, easing) {
        
            return this.each(function() {
            
                $(this).stop().slideToggle(duration, easing).toggleAttr(attr, name); 
                                 
            });         
        },
        
        slideToggleClass: function(name, duration, easing) {
        
            return this.each(function() {
            
                $(this).stop().slideToggle(duration, easing).toggleClass(name); 
                                 
            });         
        },
        
        slideToggleId: function(name, duration, easing) {
        
            return this.each(function() {
            
                $(this).stop().slideToggle(duration, easing).toggleId(name); 
                                 
            });         
        },
        
        slideToggleHeight: function(start, end, duration, easing) {
        
            return this.each(function() {
        
                $(this).stop().animate({
        
                    height: ($(this).height() == start) ? end : start
        
                }, duration, easing);
        
            });
        },
        
        slideToggleWidth: function(start, end, duration, easing) {
        
            return this.each(function() {
        
                $(this).stop().animate({
        
                    width: ($(this).width() == start) ? end : start
        
                }, duration, easing);
        
            });
        },
        
        showEach: function(delay) {
        
            return this.each(function(i) {
                
                $(this).hide().delay(i * delay).show(0);
                                 
            });         
        },
        
        hideEach: function(delay) {
        
            return this.reverse().each(function(i) {
            
                $(this).delay(i * delay).hide(0);
                                 
            });         
        },

        nextLoop: function(element) {
        
            return (this.next(element).length)?
                    this.next(element):
                    this.prevAll(element).last();        
        },
        
        prevLoop: function(element) {
        
            return (this.prev(element).length)?
                    this.prev(element):
                    this.nextAll(element).last();        
        },
        
        scrollBottom: function() {
        
            return $(document).height() - this.scrollTop() - this.height();        
        },
        
        scrollRight: function() {
        
            return $(document).width() - this.scrollLeft() - this.width();        
        },
        
        removeAll: function(name, attr) {
        
            return this.each(function() {
            
                $(this).removeClass(name).removeAttr(attr);
                                 
            });         
        },
        
        resizeEnd: function(fn, delay) {
    
            var timeOut;
    
            return this.resize(function() {
    
                clearTimeout(timeOut);
    
                timeOut = setTimeout(function() {
    
                    fn.call(this);
    
                }, delay);
    
            });
        },
        
        duplicate: function(count) {
        
            for (var x=[], i=0; i < count; i++)
                
            $.merge(x, this.clone(this).get());
            
            return this.pushStack(x);        
        },
        
        outerHTML: function() {
        
            return (!this.length) ? this : (this[0].outerHTML);
        },
            
        reverse: [].reverse
                
    });

})(jQuery);
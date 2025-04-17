/*!
 * Menu overflow handler
 * This plugin handle extra menu items for you
 *
 * Copyright 2015, Mehdi Dehghani
 * (http://www.github.com/dehghani-mehdi)
 *
 * For changelogs, check github repository (https://github.com/dehghani-mehdi/menu-overflow-handler):
 *
 * @author   Mehdi Dehghani
 * Licensed under the MIT license
 */

;
(function ($, window, document, undefined) {
    var pluginName = "overflowHandler",
        version = '3.1.0',
        defaults = {
            overflowItem: {
                text: 'سایر',
                href: '#',
                className: 'has-child' // this must be 'dropdown-menu' if using bootstrap default menu
            },
            bootstrapMode: false,
            debug: false
        };

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {
        init: function () {
            var self = this;

            addEventListener("load", function () {
                var availableWidth = self.getAvailableWidth(self.element),
                    itemTotalWidth = self.getItemTotalWidth(self.element);

                if (self.options.debug) {
                    console.info('-----------------------------------');
                    console.log('config:', self.options);
                    console.log('caller:', self.element);
                    console.log('available width: ' + availableWidth);
                    console.log('item total width: ' + itemTotalWidth);
                }

                if (itemTotalWidth > availableWidth) self.fixMarkup(self.element, self.options, availableWidth);

                $(self.element).find('> li').css('display', 'inline-block');

                if (self.options.debug) console.info('-----------------------------------');
            });
        },
        getAvailableWidth: function (el) {
            return el.parentNode.getBoundingClientRect().width;
        },
        getItemTotalWidth: function (el) {
            var $el = $(el),
                totalWidth = 0;

            $el.find('> li').each(function (i, el) {
                totalWidth += el.getBoundingClientRect().width;
            });

            return totalWidth;
        },
        fixMarkup: function (el, config, availableWidth) {
            var self = this;
            if (self.options.debug) {
                console.log('fixing markup ...');
            }

            var $li = $('<li />').addClass(config.overflowItem.className),
                $ul = $('<ul />').addClass(config.bootstrapMode ? 'dropdown-menu' : ''),
                text = config.overflowItem.text,
                bootstrapAttributes = config.bootstrapMode
                    ? 'aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" class="dropdown-toggle"'
                    : '',
                $firstLevel = $(el).find('> li'),
                totalWidth = 0,
                extraItems = [];

            $('<a ' + bootstrapAttributes + ' href="#" title="' + text + '">' + text + '<span class="caret"></span></a>').appendTo($li);

            $ul.appendTo($li);

            // minuse "سایر" item's width from available width
            availableWidth -= this.measure(el, $li);

            // because inline-block adds extra space between items
            if ($firstLevel.eq(0).css('display') === 'inline-block') availableWidth -= ($firstLevel.length * 3);

            $firstLevel.each(function (_, el) {
                totalWidth += el.getBoundingClientRect().width;

                if (totalWidth > availableWidth) extraItems.push(el);
            });

            if (this.options.debug) {
                console.log('extra items:', extraItems);
            }

            for (var i = 0, len = extraItems.length; i < len; i++) {
                $ul.append($(extraItems[i]));
            }

            $li.appendTo($(el));
        },
        measure: function (menu, $el) {
            var $clone = $el.clone(false),
                width = 0;

            $clone.css({
                visibility: 'hidden',
                position: 'absolute'
            }).appendTo($(menu));

            width = $clone[0].getBoundingClientRect().width;

            $clone.remove();

            return width;
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);

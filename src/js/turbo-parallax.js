'use strict';

class TurboParallaxLayer {
  constructor($el) {
    this.init($el);
  }

  init($el) {
    this.$el = $el;
    this.initConfig();
    this.setMatrix(this.config.zoom, 0, 0);
    this.initListeners();
  }

  initConfig() {

    if (this.$el.data('turbo-parallax')) {
      this.config = $.parseJSON(this.$el.data('turbo-parallax').replace( /'/g, '"' ));
    } else {
      this.config = {}
    }

    this.config.zoom = this.config.zoom || 1;
    this.config.depth = this.config.depth || 1;
    this.config.offsetX = this.config.offsetX || this.$el.offset().left;
    this.config.offsetY = this.config.offsetY || this.$el.offset().top;
  }

  initListeners() {
    let self = this;

    $('body').on('mousemove', function (e) {
      self.setPosition(e, self);
    });
  }

  setMatrix(zoom, X, Y) {
    let cssOption = 'matrix(' + zoom + ', 0, 0, ' + zoom + ', ' + X + ', ' + Y + ')';
    this.$el.css('transform', cssOption);
    this.$el.css('-moz-transform', cssOption);
    this.$el.css('-webkit-transform', cssOption);
    this.$el.css('-o-transform', cssOption);
    this.$el.css('-ms-transform', cssOption);    
  }

  setPosition(event, self) {
    // let elemOffsetX = self.config.offsetX + self.$el.width() / 2,
    //     elemOffsetY = self.config.offsetY + self.$el.height() / 2,
    let bodyOffsetX = $('body').width() / 2,
        bodyOffsetY = $('body').height() / 2,
        translateX = (bodyOffsetX - event.pageX) / (self.config.depth),
        translateY = (bodyOffsetY - event.pageY) / (self.config.depth);

    self.setMatrix(self.config.zoom, translateX, translateY);
  }
};

class TurboParallax {
  constructor(el) {
    this.init(el);
  }

  init(el) {
    let self = this;

    self.isInit = true;
    if (!el) {
      el = '[data-turbo-parallax]';
    }
    self.$el = $(el);
    if (self.$el.length === 0) {
      self.isInit = false;
    }
    self.layers = [];
    self.$el.each(function () {
      self.layers.push(new TurboParallaxLayer($(this)));
    });
  }
};
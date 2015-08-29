function SlideService() {
  this.slides = [];
  this.addSlide = function (slide, query) {
    var slide = slide;
    slide.title = query;
    this.slides.push(slide);
  };
}

angular.module('app').service('SlideService', SlideService);
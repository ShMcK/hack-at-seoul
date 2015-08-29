function SlideService() {
  this.slides = [];
  this.addSlide = function (slide) {
    this.slides.push(slide);
  };
}

angular.module('app').service('SlideService', SlideService);
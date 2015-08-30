function SlideService() {
  //this.slides = [];
  this.addSlide = function (slide, query) {
    slide.title = query;
    slide.notes = '';
    console.log(slide);
    //this.slides.push(slide);
    delete slide.$$hashKey;
    GifList.insert(slide);
  };
}

angular.module('app').service('SlideService', SlideService);
function SlideService() {
  //this.slides = [];
  this.addSlide = function (slide, query) {
    alert(slide);
    alert(query);
    slide.title = query;
    console.log(slide);
    //this.slides.push(slide);
    delete slide.$$hashKey;
    GifList.insert(slide);
  };
}

angular.module('app').service('SlideService', SlideService);
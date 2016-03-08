(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: 'Ng-cms is the most popular angularjs & bootstrap framework for building responsive, mobile-first and user-friendly website'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));

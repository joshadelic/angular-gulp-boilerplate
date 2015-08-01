(function() {
  'use strict';

  angular
    .module('angularBootstrapGulp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

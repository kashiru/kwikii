angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $location, $ionicActionSheet) {

        $scope.amount_to_pay = 12000.0;

        var rander = Math.random();
        $ionicModal.fromTemplateUrl('templates/confirm_merchant.html?q=' + rander, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
                $scope.modal = modal;
//            $scope.modal.show();
            });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });


        $scope.confirmMerchant = function(val){
          $scope.closeModal();
          $location.path('/app/payment_confirmation');
          $scope.confirmed_amount = val;
        };

        $scope.showPaymentSheet = function() {

            // Show the action sheet
            $ionicActionSheet.show({
                buttons: [
                    { text: 'GTB current account' },
                    { text: 'Stanbic current account' },
                    { text: 'New payment option' }
                ],
                //destructiveText: '',
                titleText: 'Select payment method',
                cancelText: 'Cancel',
                buttonClicked: function(index) {
                    return true;
                }
            });

        };





})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

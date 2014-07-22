angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $location, $ionicActionSheet, $timeout, ContactService) {

        $scope.amount_to_pay = 12000.0;

        var rander = Math.random();
        $ionicModal.fromTemplateUrl('templates/confirm_merchant.html?q=' + rander, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
                $scope.modal = modal;
            });



        $ionicModal.fromTemplateUrl('templates/find_contact.html?q=' + rander, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.contacts_modal = modal;
        });


        $scope.state = "find";

        $scope.contacts = [];

        //$scope.contact = {};


        $scope.openContactsModal = function () {
            $scope.contacts_modal.show();

            $scope.findContact();

        };

        $scope.findContact = function (contactSearch) {
            ContactService.find(contactSearch).then(function (contacts) {
                $scope.contacts = contacts;

            }, function (error) {
                console.log(error);
            });
        };




//        $scope.openContactsModal = function() {
//

////            $scope.contacts_modal.show();
////
//            var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
//            navigator.contacts.find(function(contacts){
//                alert('found!');
//                //alert(contacts.length)
//
//            },function(contactError){
//                alert('failed')
//            })
//
//        };


        $scope.closeContactsModal = function() {
            $scope.contacts_modal.hide();
        };


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


        $scope.doRefresh = function() {

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);





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

.controller('SplashCtrl', function($scope) {
        $scope.mode = 'signin';

        $scope.switchMode = function(val){
            $scope.mode = val;
        }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {

})

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

    .controller('ContactCtrl', function($scope, ContactService, $ionicActionSheet, $location, contacts) {


        $scope.local_contacts = contacts;
        $scope.state = "find";

        $scope.contacts = [];



        $scope.findContact = function (contactSearch) {
            ContactService.find(contactSearch).then(function (contacts) {
                $scope.contacts = contacts;

            }, function (error) {
                console.log(error);
            });
        };


        if(!!window.cordova){
            $scope.findContact();
        }


        $scope.selectContact = function(contact) {


            if(contact.phoneNumbers.length == 0){

            }
            else if(contact.phoneNumbers.length == 1){


                $scope.selected_contact = {name: contact.name.formatted, number: contact.phoneNumbers[0].value}
                $scope.confirmContact();
            }else if(contact.phoneNumbers.length > 1){

                var numbers = [];

                for (var j = 0; j < contact.phoneNumbers.length; j++){

                    var entry = {text: contact.phoneNumbers[j].value}
                    numbers.push(entry);

                }

                // Show the action sheet
                $ionicActionSheet.show({
                    buttons: numbers,
                    //destructiveText: '',
                    titleText: contact.name.formatted,
                    cancelText: 'Cancel',
                    buttonClicked: function(index) {

                        $scope.selected_contact = {name: contact.name.formatted, number: contact.phoneNumbers[index].value};
                        $scope.confirmContact();

                        return true;
                    }
                });
            }
        };

        $scope.confirmContact = function(){


            //$state.go('app.transfer');
            $location.path('app/transfer');
            //$scope.closeContactsModal();

        }

    })
    .controller('TransferCtrl', function($scope, contact) {

        $scope.contact = contact;



    })

.controller('PlaylistCtrl', function($scope, $stateParams) {

})

kwikii_app.service("ContactService", function ($rootScope, $q) {


    return {
        create: function () {
            return navigator.contacts.create()
        },
        find: function (filter) {
            var deferred = $q.defer();

            var options = new ContactFindOptions();
            options.filter = filter;
            options.multiple = true;
            var fields = ["displayName", "name", "addresses", "emails", "phoneNumbers","photos"];
            navigator.contacts.find(fields, function (contacts) {
                $rootScope.$apply(function () {
                    deferred.resolve(contacts);
                });

            }, function (error) {
                $rootScope.$apply(function () {
                    deferred.reject(error);
                });
            }, options);

            return deferred.promise;
        }
    };
});


kwikii_app.service('LocalContactService', function($q) {
    return {
        contacts: [
            {
                id: '1',
                name: 'Kola Ashiru',
                phone_numbers: ['0810-360-8580']
            },
            {
                id: '2',
                name: 'Yomi Adedeji',
                phone_numbers: ['0803-234-3433']
            }
        ],
        getContacts: function() {
            return this.contacts
        },
        getContact: function(contact_id) {
            var dfd = $q.defer()
            this.contacts.forEach(function(contact) {
                if (contact.id === contact_id) dfd.resolve(contact)
            })

            return dfd.promise
        }

    }
})
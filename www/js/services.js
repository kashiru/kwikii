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

kwikii_app.service('TransactionService', function($q) {
    return {
        transactions: [
            {
                id: '10240340343',
                amount: 3203.23,
                currency: 'NGN',
                created_at: Date.now(),
                status: 'Completed',
                to: {
                    kwikii_id: '294343',
                    name : 'Kola Ashiru',
                    bank_name: 'GT Bank',
                    account_number: '030-343-3454',
                    phone_numbers: ['0810-360-8580']

                },
                from: {
                    kwikii_id: '232324',
                    name : 'Kola Ashiru',
                    bank_name: 'GT Bank',
                    account_number: '030-343-3454',
                    phone_numbers: ['0810-360-8580']

                }

            },
            {
                id: '10240340348',
                amount: 5000,
                currency: 'NGN',
                created_at: Date.now(),
                status: 'Completed',
                to: {
                    kwikii_id: '294343',
                    name : 'Kola Ashiru',
                    bank_name: 'GT Bank',
                    account_number: '030-343-3454',
                    phone_numbers: ['0810-360-8580']

                },
                from: {
                    kwikii_id: '232324',
                    name : 'Kola Ashiru',
                    bank_name: 'GT Bank',
                    account_number: '030-343-3454',
                    phone_numbers: ['0810-360-8580']

                }

            },
            {
                id: '10240340344',
                amount: 25000,
                currency: 'NGN',
                created_at: Date.now(),
                status: 'Completed',
                to: {
                    kwikii_id: '294343',
                    name : 'Kola Ashiru',
                    bank_name: 'GT Bank',
                    account_number: '030-343-3454',
                    phone_numbers: ['0810-360-8580']

                },
                from: {
                    kwikii_id: '232324',
                    name : 'Kola Ashiru',
                    bank_name: 'GT Bank',
                    account_number: '030-343-3454',
                    phone_numbers: ['0810-360-8580']

                }

            }
        ],
        getTransactions: function() {
            return this.transactions
        },
        getTransaction: function(transaction_id) {
            var dfd = $q.defer()
            this.transactions.forEach(function(transaction) {
                if (transaction.id === transaction_id) dfd.resolve(transaction)
            })

            return dfd.promise
        }

    }
})
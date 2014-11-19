var EmployeeService = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        var deferred = $.Deferred();
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        deferred.resolve(employee);
        return deferred.promise();
    }

    this.findByName = function(searchKey) {
        var deferred = $.Deferred();
        var results = employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();
    }

    var employees = [
        {"id": 1, "firstName": "Groceries", "lastName": "", "managerId": 0, "managerName": "", "title":"30", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "dollar.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
        {"id": 2, "firstName": "Utilities", "lastName": "", "managerId": 1, "managerName": "James King", "title": "80", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "dollar.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
        {"id": 3, "firstName": "Fun Money", "lastName": "", "managerId": 1, "managerName": "James King", "title": "30", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "dollar.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
        {"id": 4, "firstName": "Rent(fixed)", "lastName": "", "managerId": 1, "managerName": "James King", "title": "100", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "dollar.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
        {"id": 5, "firstName": "Budget 2", "lastName": "", "managerId": 1, "managerName": "James King", "title": "40", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "dollar.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
        {"id": 6, "firstName": "Budget 3", "lastName": "", "managerId": 4, "managerName": "John Williams", "title": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "dollar.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
        {"id": 7, "firstName": "Car payment(fixed)", "lastName": "", "managerId": 4, "managerName": "John Williams", "title": "100", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "dollar.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
        {"id": 8, "firstName": "Budget 4", "": "", "managerId": 2, "managerName": "Julie Taylor", "title": "50", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "dollar.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
        {"id": 9, "firstName": "Budget 5", "lastName": "", "managerId": 2, "managerName": "Julie Taylor", "title": "50", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "dollar.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
        {"id": 10, "firstName": "Kathleen", "lastName": "Byrne", "managerId": 5, "managerName": "Ray Moore", "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "dollar.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
        {"id": 11, "firstName": "Amy", "lastName": "Jones", "managerId": 5, "managerName": "Ray Moore", "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "dollar.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
        {"id": 12, "firstName": "Steven", "lastName": "Wells", "managerId": 4, "managerName": "John Williams", "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
    ];

}

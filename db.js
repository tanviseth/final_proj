 var dbObj = openDatabase('Mindstick', 1.0, 'My First Web-SQL Example', 2 * 1024 * 1024);

    dbObj.transaction(function (tx) {

        tx.executeSql('CREATE TABLE IF NOT EXISTS DONOR (name,email,contact,street,locality,pincode,password)');

    });
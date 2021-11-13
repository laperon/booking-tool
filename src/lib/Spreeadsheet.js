import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
// import useGoogleSheets from 'use-google-sheets';
// import GoogleSpreadsheets from "./Api/GoogleSpreadsheets";
import { GoogleSpreadsheet } from "google-spreadsheet";

let userDataArray = [];

function Spreeadsheet() {

    // // Config variables
    const SPREADSHEET_ID = '1SKwYSggegARNuhMHlFOhHqi-1xMV-0hfT4B3SGGu3vU'; //from the URL of your blank Google Sheet
    const SHEET_ID = '1378992840';
    const CLIENT_EMAIL = 'laperon@hybrid-bastion-323817.iam.gserviceaccount.com';
    const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC8EA1as2x8iYa/\nJw3yEj88hMCr+3s3BuSi+gMl6fQ3UhoFmo6YgkUEjSDKRfPhLSQYYe3/tTOZCqgy\nNqauquLfE4JtFQWLhR8B+oPNRng6WFH6vo1TQwdd2vT74lbhUUlAGW13g1O/Dxqx\nJuleCXCemXT3MIKPwWi+i9o0JTOk0CDV4k4R+at8gNEI78wC4kaV3IkSt7NCLkpS\nrWh5ZZhcQlDdRdjjakiv3bYmagjXwoOzknnAre2dH85H9ekoHklgaGXuIZu+2qOg\n3qPBxhN6hOMF/zqXuR9YUAlAGyHqDylrVeADpVja6/m2+t8S+oOJwjR8i1oefQSL\nVl1oNOOJAgMBAAECggEAEYOXsMqcp/j5VfA9y91f6wOMe3/NRO3FCXoJ5MQl4KiK\nYJr5HHImWhMIGppa6O22qrglDW87Rc2QpjOBgKsMu5xyJTVD2c9dGMazM2D0la9v\nvA+2suo/Q4H+ln4o2+1BaoEruQl/mT+fe1/NtDqiFL0jH9myUQ/AsN0upjRQO9EW\ntjYUo/du6ET0akedWPwjxQ1SSTrB/8zDZLH42rPa6q9fwNjvzq2Je/CNPk2XSH6h\nEcGZwy39L4emlZCsbI+HKHbIyJDMqG/0GI9Zo8BTeB6rxFruJjG2cQhWMpZdjogK\nAuEsW87Eu5XNYzubabK1p/6+eQYQoYXNXmNwEct5sQKBgQDvPDNrE547dTJfQLYg\nw1fFU2YDGJMfUds2k0bYPiTK11IoZVXXHKbUyAYnzoAsFeMHLYB6qD3veuahP4GR\nomABCz9Ar+0unJa+KvA67rTrKv+QCBVAztWc/dGwkDb+2A4jcVJdm17iwgoI+TiK\nLOniYwMz5xWJRksQFE/KfI392QKBgQDJPdWg0ddMXh2GVzCurZ5NY0fEj4j8y96R\nzo79d6DEBGza3jhyv29f23ztpsp6twCwCn8CFoNjEN7ho93+edlTx0mcOTRpZBIY\nz1+307aeCLP0dvYaQ9/UAhhpsCU6YToaI61mGz1fnbkX46aG8jEvJOpM4m0G/D0D\nAZs2+YiVMQKBgCGlRNH9W1afX+s3jaXD81ckKIes8BwKhhsB0YfeDYydhcd6oPz0\n4Z2xV/RHPY11so0y4AvgF33TuhXZeZ6CyJ+89jNhyqiwix7JqSmQos8kJ/cYu+x2\namJ+6/u5/JIQzsQ7Tssta8XWZlTmwAXm1SnqpOuqx0OcKDhlsucWZ13ZAoGAdTtC\nUbcsdt500KfGQlv91hM54bXEFZAmDkaIYfvoeYgiabX+qEoA9ZSFSGRbm/Uzv1m9\n91dqHrHbRRMS5YXSJs33gbyJXcPgDvfvSMVaouFrA8SxRUe5AmZeFmN4rHOrR0L1\nZoAD1smo49PIVOCN6mrU2wkkfmc+m5u58eKXwGECgYEA1j1UazhWM4zxR4HZiooo\njyxGE23N97yAJEk2ZzKeVQQl+hVjkaCi63Y8/3HPsFbwfeBage6yyWjwEIjpIEll\n4HKlsUaQDbT/aJ9iPtsFrvrYZfcc4yKOTfv5KWCIxVJAXf1OYSvafmU+kfOFGL4p\n9bLp7cmwvTN+TTDAtiXrTr4=\n-----END PRIVATE KEY-----\n";


    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    
    const addRequestToOrder = () => {};

    const getCellByRange = async () => {
        try {
            await doc.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
            });
            // loads document properties and worksheets
            await doc.loadInfo();

            const sheet = doc.sheetsById[SHEET_ID];

            await sheet.loadCells('A1:B6');
            const cellA1 = sheet.getCell(0, 0);
            const cellB6 = sheet.getCellByA1('B6');

            // Get value
            console.log(cellB6.value);
        


        } catch (e) {
            console.error('Error: ', e);
        }
    } 

    //Here is test comment
    const appendSpreadsheet = async (row) => {
        try {
            await doc.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
            });
            // loads document properties and worksheets
            await doc.loadInfo();

            const sheet = doc.sheetsById[SHEET_ID];
            // await sheet.clear();
            const result = await sheet.addRow(row);
            // const getRow = sheet.getCellByA1('A1');
            // const loadCells = await sheet.loadCells('A2:B7');

            // const a1 = sheet.getCell(0, 0); // access cells using a zero-based index


            // console.log(loadCells);

        } catch (e) {
            console.error('Error: ', e);
        }
    };


    getCellByRange();

    // const newRow = { Name: "new name 222", Value: "new value" };
    // appendSpreadsheet(newRow);

    return true;
}

export default Spreeadsheet;
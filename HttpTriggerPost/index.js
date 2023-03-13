module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const raw = {
        Date: req.body.Date,
        WarehouseID: req.body.WarehouseID,
        ShippingPO: req.body.ShippingPO,
        ShipmentID: req.body.ShipmentID,
        BoxesRcvd: req.body.BoxesRcvd,
        ShipperID: req.body.ShipperID
    };
    const currentDate = new Date();

    // Convert the current date to a formatted string
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    raw.Date = formattedDate
    
    context.bindings.insert = JSON.stringify(raw);
    context.res = {
        status: 200,
        body: "GOOD"
    };

    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: responseMessage
    // };
}

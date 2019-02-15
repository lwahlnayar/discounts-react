import retailerData from "./../retailer-data";

const routes = ["/"];

if (retailerData.length > 0) {
    for (var i = 0; i <= retailerData.length - 1; ++i) {
        routes.push(retailerData[i].url);
    }
}

export default routes;

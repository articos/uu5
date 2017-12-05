/**
 * Server calls of application client.
 */
import {Uri} from "uu_appg01_core"
import {Client} from "uu_appg01"

const POST = "post";
const GET = "get";

let Calls = {

    call: function (method, url, dtoIn) {
        Client[method](url, dtoIn.data).then(
            function (response) {
                console.info(response.data);
                dtoIn.done(response.data);
            }, function (response) {
                console.info(response.error);
                dtoIn.fail(response);
            }
        );
    },

    cars: function (dtoIn) {
        let commandUri = Calls.getCommandUri("cars");
        Calls.call(GET, commandUri, dtoIn);
    },
    findCars: function (dtoIn) {
        let commandUri = Calls.getCommandUri("cars/find");
        Calls.call(GET, commandUri, dtoIn);
    },
    tractorDetail: function (dtoIn) {
        let commandUri = Calls.getCommandUri("cars/find");
        Calls.call(GET, commandUri, dtoIn);
    },
    tractorRepairs: function (dtoIn) {
        let commandUri = Calls.getCommandUri("/repair-detail/find-repairs/" + dtoIn.data.tractorId);
        Calls.call(GET, commandUri, dtoIn);
    },
    tractorLends: function (dtoIn) {
        let commandUri = Calls.getCommandUri("lends/find-by-carid/" + dtoIn.data.tractorId);
        Calls.call(GET, commandUri, dtoIn);
    },
    addCar: function (dtoIn) {
        let commandUri = Calls.getCommandUri("cars/new");
        Calls.call(POST, commandUri, dtoIn);
    },
    getCarDetail: function (dtoIn) {
        let commandUri = Calls.getCommandUri("cars/find-car/" + dtoIn.data.tractorId);
        Calls.call(GET, commandUri, dtoIn);
    },
    tractorLendDetail: function (dtoIn) {
        let commandUri = Calls.getCommandUri("cars/find-car/" + dtoIn.data.tractorId);
        Calls.call(GET, commandUri, dtoIn);
    },
    lendDetail:function(dtoIn){
        let commandUri = Calls.getCommandUri("lends/" + dtoIn.data.lendId);
        Calls.call(GET, commandUri, dtoIn);
    },
    lends:function(dtoIn){
        let commandUri = Calls.getCommandUri("clients");
        Calls.call(GET, commandUri, dtoIn);
    },
    carsForStk:function(dtoIn){
        let commandUri = Calls.getCommandUri("cars/stk");
        Calls.call(GET, commandUri, dtoIn);
    },

    getCommandUri: function (aUseCase) { // useCase <=> "/getSomething" or "/sys/getSomething"
        let useCase = (!aUseCase.match(/^\//) ? "/" + aUseCase : aUseCase);
        // let baseUri = location.protocol + "//" + location.host + location.pathname;
        let baseUri = "http://localhost:7070/car-evidence";
        console.info("######## INFO ####### " + baseUri + useCase);
        return baseUri + useCase;
    }

};

export default Calls;

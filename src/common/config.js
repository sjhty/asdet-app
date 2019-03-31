let env = "";
let baseUrl = "";

switch(env) {
    case "dev":
        baseUrl = "";
        break;
    case "pro":
        baseUrl = "";
        break;
    default:
        baseUrl = ""
}

export default baseUrl;
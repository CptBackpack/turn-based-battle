export default function (text, type, damage, action) {

    let buttonType = '';
    switch (type) {
        case "lightning":
            buttonType = "bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800";
            break;
        case "earth":
            buttonType = "bg-green-600 hover:bg-green-700 active:bg-green-800";
            break;
        case "ice":
            buttonType = "bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800";
            break;
        case "fire":
            buttonType = "bg-red-600 hover:bg-red-700 active:bg-red-800";
            break;
        case "normal":
        default:
            buttonType = "bg-gray-600 hover:bg-gray-700 active:bg-gray-800";
            break;

    }

    let buttonString = '<button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium outline-3 rounded-lg border leading-tight uppercase shadow-md \
            text-white hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out ' + buttonType + '" \
            onClick = "' + action + '"> ' +
        text + '<small class="ml-1">' + damage + '</small>' 
        + ' </button>';

    return buttonString;
}
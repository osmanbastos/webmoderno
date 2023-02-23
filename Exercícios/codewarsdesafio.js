names = ["john", "paul", "ringo", "george"]
const resultado = function (names) {
    switch (names(length)) {
        case 0:
            console.log('no one likes this')
            break;
        case 1: case 2: case 3:
            console.log(`${names} like this`)
            break;
        /*default:
            console.log(`${names} and 2 others`)
            break;*/
    }
}
//names("")

resultado(`john`)
//names("john", "paul", "ringo", "george")
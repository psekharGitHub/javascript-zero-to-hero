try {
    // ? code that may throw an error
} catch(ex){
    // ? code to be executed if an error occurs
} finally {
    // ? code to be executed regradless of an error
    // ? to close database connections
    // ? to close network connections
    // ? to close file connections
    // ? to cleanup our code
}

try {
    var output = getMessage("hello", "peter")
} catch (ex) {
    console.log(ex)
} finally {
    console.log("This will be executed regardless")
}
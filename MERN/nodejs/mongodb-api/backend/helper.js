function generateNameAndDesti(original_name, modal) {
    const fileName = Math.floor(Math.random() * 10000) + new Date().getTime() + original_name;
    const desti = "./public/" + modal + "/" + fileName;
    return {
        fileName,
        desti
    }
}

module.exports = {
    generateNameAndDesti
}
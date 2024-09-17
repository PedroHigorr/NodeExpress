

const logger = (req, res, next) => {

console.log(`${new Date(Date.now()).toLocaleString} ${req.mthod} ${req.url}`)

}

export default logger
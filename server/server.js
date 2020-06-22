const express = require("express")
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, "..", "dist")))

const template = path.resolve(__dirname, "..", "index.html")
app.get("", (req, res) => {
    res.sendFile(template)
})

app.listen(4000, () => {
    console.log("Server running on port 4000")
})
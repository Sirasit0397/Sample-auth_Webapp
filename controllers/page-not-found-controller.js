const notFound = (req, res, next) => {
    res.render("page-not-found", {
        data:{
            pageName: "error 404",
            message: "Not found Page",
            class: "alert alert-warning",
            loginStatus: false

        }
    })
}
module.exports = notFound
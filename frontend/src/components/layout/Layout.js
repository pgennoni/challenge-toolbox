import Header from "../header/Header"

const Layout = ({children}) => {
    return (
        <html>
            <head>
                <title>Toolbox challenge</title>
            </head>
            <body>
                <Header />
                { children }
            </body>
        </html>
    )
}

export default Layout
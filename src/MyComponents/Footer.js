import React from 'react'

const Footer = () => {
    let footerStyle={
        position:'relative',
        top:'10vh',
        width:'100%',
        border:"3px solid blue"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center" >
                Copyright &copy; MyTodosList.exe 
            </p>
        </footer>
    )
}

export default Footer

const schemaMaterialUI = (stateModeDark) =>{
    
    const schema = {
        palette: {
            type: stateModeDark ? 'dark' : 'light',
            primary: {
                main: '#153e90',
            }
        },
        typography: {
            fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            ].join(','),
        }
    }

    return schema;
}

export default schemaMaterialUI;
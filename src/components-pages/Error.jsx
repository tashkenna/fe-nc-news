export const Error = (params) => {
    const {errorStatus, errorMessage} = params
    return (<div className="error-page"> 
    <h1>{errorStatus} error</h1>
    <h1>{errorMessage}</h1>
    <p>please try again</p>
    </div>)
}
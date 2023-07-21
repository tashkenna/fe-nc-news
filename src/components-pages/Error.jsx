export const Error = (params) => {
    const {errorStatus, errorMessage} = params
    return (<div className="error-page"> 
    <h1>{errorStatus} error</h1>
    <h2>{errorMessage}</h2>
    <p>please try again</p>
    </div>)
}
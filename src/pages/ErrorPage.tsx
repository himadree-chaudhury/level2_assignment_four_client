

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Error</h1>
            <p className="mt-4">Sorry, an error occurred while processing your request.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
};

export default ErrorPage;
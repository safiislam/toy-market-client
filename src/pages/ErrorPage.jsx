
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <p>{error.statusText}</p>
            <p className='text-5xl'>{error.status}</p>
        </div>
    );
};

export default ErrorPage;
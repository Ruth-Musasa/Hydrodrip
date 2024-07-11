import { FaExclamationTriangle } from 'react-icons/fa';

export default function ErrorPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow flex flex-col justify-center items-center text-center p-4 ">
                <FaExclamationTriangle className="text-9xl text-red-600 mb-4" />
                <h2 className="text-5xl font-bold mb-4">404 Page Not Found!</h2>
                <p className="text-lg">Désolé, la page que vous recherchez n'existe pas.</p>
            </div>
        </div>
    );
}

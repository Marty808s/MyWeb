import '../index.css';
import logo from '../graphics/logo.svg';

function Footer() {
    return (
        <footer className="bg-white shadow dark:bg-gray-800 fixed bottom-0 w-full">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://viaswebs.cz/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Flowbite Logo" />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://github.com/Marty808s" className="hover:underline me-4 md:me-6">GitHub</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="martin.vlnas@viaswebs.cz" className="hover:underline">Marty808</a>. All Rights Reserved.</span>
            </div>
        </footer>


    );
}

export default Footer;
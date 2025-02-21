import {useState} from "react";
import {Briefcase, Menu, X} from "lucide-react";

const WelcomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Navigation */}
            <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Briefcase className="h-8 w-8 text-gray-700"/>
                            <span className="ml-2 text-xl font-semibold text-gray-800">COMPANY</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">HOME</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">SERVICES</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">ABOUT</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">CONTACT</a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-gray-900"
                            >
                                {isMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                            <a href="#"
                               className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">HOME</a>
                            <a href="#"
                               className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">SERVICES</a>
                            <a href="#"
                               className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">ABOUT</a>
                            <a href="#"
                               className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">CONTACT</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}/>
                </div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-gray-900 mb-4">
                            Welcome
                        </h1>
                        <h2 className="text-3xl font-medium text-gray-700 mb-8">
                            To Our Company
                        </h2>
                        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
                            We specialize in delivering innovative solutions that transform businesses.
                            Our expertise and dedication ensure your success in the digital age.
                        </p>
                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium
              hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105">
                            LEARN MORE
                        </button>
                    </div>

                    {/* Decorative Elements */}
                    <div
                        className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gray-100 to-transparent"/>
                </div>
            </div>
        </div>
    )
}
export default WelcomePage

import { useState, useEffect } from 'react';
import logo from '../../assets/imgs/EDUWIZZMain.png'
import { Menu, X } from 'lucide-react';
// Navigation Component
const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="" className="w-48 " />

                    </div>

                    <div className="hidden md:flex space-x-8">
                        {['Home', 'Features', 'Services', 'About', 'FAQ', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={` hover:text-purple-600 transition-colors duration-200 ${isScrolled ? 'text-black' : 'text-white'} font-medium`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <button className="hidden md:block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                        Get Started
                    </button>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
                    <div className="px-4 py-6 space-y-4">
                        {['Home', 'Features', 'About', 'FAQ', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-full">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
const Navbar = () => {
    return (
        <nav>
            <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
                <div className="text-lg font-bold">Library Management System</div>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">All Books</a></li>
                    <li><a href="/books" className="hover:underline">Add Books</a></li>
                    <li><a href="/about" className="hover:underline">Borrow Summary</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
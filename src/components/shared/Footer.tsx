const Footer = () => {
  return (
      <footer>
        <div className="bg-gray-900 text-white py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-semibold mb-4">Library Management System</h2>
            <p className="text-sm">
              A comprehensive solution for managing library resources, including books, members, and transactions.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 text-white py-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Library Management System. All rights reserved.
          </p>
        </div>
    </footer>
  )
}

export default Footer
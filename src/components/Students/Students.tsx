import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MockUser, User } from "../../interfaces";


const Students = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [students, setStudents] = useState<User[]>([]);

    const itemsPerPage: number = 9;

    useEffect(() => {
        const fetchFunction = async() => {
            let result = await fetch("https://dummyjson.com/users");
            let data : MockUser = await result.json(); 
            console.log(data)
            setStudents(data.users);
        }
        fetchFunction();
    },[]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
    
    const filteredStudents = students.filter(student =>
        student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const paginatedStudents = filteredStudents.slice(startIdx, startIdx + itemsPerPage);

    const handleNextPage = () => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    const handlePreviousPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));

    if (!students) {
        return <div>Loading...</div>;
    }

    return (
        <section className="min-h-full">
            <div className="pb-4 dark:bg-gray-900 flex justify-between">
                <div>
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input value={searchQuery} onChange={handleSearchChange} type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                    </div>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Naam
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Adress
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Company
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedStudents.map((student, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src={student.image} alt="Jese image" />
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">{student.firstName} {student.lastName}</div>
                                        <div className="font-normal text-gray-500">{student.email}</div>
                                    </div>  
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <p>{student.address.address}</p>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <p>{student.company.name}</p>
                                </td>
                                <td className="px-6 py-4">
                                    <Link to={`/students/${student.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Info</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between items-center p-4">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Students;
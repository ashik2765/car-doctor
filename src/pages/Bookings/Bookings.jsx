import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    return (


        <div className="overflow-x-auto">
            <table className="w-full md:w-4/5 mx-auto">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-start">Images</th>
                        <th className="px-4 py-2">Service Name</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <BookingRow
                            key={booking._id}
                            booking={booking}
                        />
                    ))}
                </tbody>
            </table>
        </div>




    );
};

export default Bookings;


const BookingRow = ({ booking }) => {
    const { img, date, price, service } = booking;
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className=" rounded w-24 h-24">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className="text-center">
                {service}
            </td>
            <td className="text-center">{date}</td>
            <td className="text-center">$ {price}</td>
            <th className="text-center">
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;
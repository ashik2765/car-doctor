import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, img, price } = service;
  const { user } = useContext(AuthContext);

  const handleService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.number.value;
    const email = form.email.value;

    const booking = {
      customerName: name,
      date,
      email,
      phone,
      img,
      price,
      service_id: _id,
      service: title,
    }

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {

        if (data.insertedId) {
          alert('Service booked successfully')
        }
        form.reset();
      })



  }
  return (

    <div className="card-body">
      <h2 className="text-center text-2xl font-bold mx-4">Service Name: {title}</h2>
      <form onSubmit={handleService}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" defaultValue={user?.name} name="name" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input type="text" placeholder="Phone Number" name="number" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Your Email" defaultValue={user?.email} name="email" className="input input-bordered" />
          </div>

        </div>

        <div className="form-control mt-6">
          <input className="btn btn-primary btn-block" type="submit" value="Conform Oder" />
        </div>
      </form>


    </div>

  );
};

export default CheckOut;
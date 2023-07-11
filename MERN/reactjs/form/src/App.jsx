import { useState } from "react";

function App() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [users, setUser] = useState([]);
  const submitHandler = (e) => {
    setSuccess("");
    e.preventDefault();

    validateData(e.target.name, 'Please enter the name');
    validateData(e.target.email, 'Please enter the email');
    validateData(e.target.password, 'Please enter the password');


    if (e.target.name.value != "" && e.target.email.value != "" && e.target.password.value != "") {
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      }

      setUser(
        [
          ...users, //spread
          data
        ]
      )
      setSuccess("Data added successfully");
      e.target.reset();
      setError("");
    }
  }

  const validateData = (inp, msg) => {
    if (inp.value == "") {
      inp.nextSibling.innerText = msg;
      inp.classList.add("error-inp");
    } else {
      inp.nextSibling.innerText = "";
      inp.classList.remove("error-inp");
    }
  }

  return (
    <div className="container border border-danger p-3">
      <h4 className="text-center text-danger">{error}</h4>
      <h4 className="text-center text-success">{success}</h4>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="name" name="name" className="form-control" />
          <span className="text-danger"></span>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" />
          <span className="text-danger"></span>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" />
          <span className="text-danger"></span>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(
              (u, i) => {
                return <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.password}</td>
                </tr>
              }
            )
          }
        </tbody>
      </table>
    </div>

  );
}

export default App;

import axios from "axios";
function App() {

  function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", event.target.title.value)
    formData.append("image", event.target.image.files[0])
    axios.post(
      "http://localhost:5000/upload",
      formData
    ).then(
      (success) => {
        console.log(success);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )

  }

  return (
    <div className="container mt-3">
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <div className="input-group mb-3">
          <label className="input-group-text">Title</label>
          <input type="text" name="title" className="form-control" />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text">Upload</label>
          <input type="file" name="image" className="form-control" />
        </div>
        <div className="my-2">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}

export default App;

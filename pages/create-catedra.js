import NavBar from "./components/NavBar"

export default function CreateCatedra() {

    const handelOnChanges = (e)=> {
        const {value, name } = e.target;
        console.log(value, name)
    }

    return (
        <div>
            <NavBar title={'Crear Catedra'} />
            <div className="container">
                <div className="card m-2 mt-4 m-2" style={{ width: "100%" }}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" name='email' onChange={handelOnChanges} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" name='nombre' onChange={handelOnChanges} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
